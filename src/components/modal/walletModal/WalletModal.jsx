import { useModal } from "utils/ModalContext";
import { FiX, FiChevronRight } from "react-icons/fi";
import React, { useEffect, useState } from 'react';
import WalletModalStyleWrapper from "./WalletModal.style";
import { isMetaMaskInstalled, connectWalletAndCheckNetwork, isAccountConnected, disconnectWallet } from "lib/metamaskhandler";
import Button from "components/button";
import BannerStyleWrapper from "../../../sections/Banner/v1/Banner.style";
import metamaskIcon from "assets/images/icons/meta-mask.png";
import coinBase from "assets/images/icons/coinbase.png";
import trustWalletIcon from "assets/images/icons/trust.png";
import walletConnect from "assets/images/icons/wallet.png";

const WalletModal = () => {
  const { walletModalHandle, handleMetamaskModal, updateWalletConnectionStatus } = useModal();
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    //const ethereum = window.ethereum;
    const checkIfWalletIsConnected = async () => {
      const accounts = await isAccountConnected();
      if (accounts && accounts.length > 0) {
        setIsConnected(true); // Update local state to reflect that wallet is connected
        updateWalletConnectionStatus(true); // Update global state/context if needed
        // if (ethereum) {
        //   const handleChainChanged = (chainId) => {
        //       // Check if the new chainId is not BSC Testnet
        //       if (chainId !== '0x61') {
        //           switchToBscTestnet();
        //       }
        //   };

        //   ethereum.on('chainChanged', handleChainChanged);

        //   // Cleanup listener when the component unmounts
        //   return () => ethereum.removeListener('chainChanged', handleChainChanged);
        // }
      }
    };

    checkIfWalletIsConnected();
  }, [updateWalletConnectionStatus]); // Depend on context method to re-check if it changes

  const handleMetamask = async (e) => {
    e.preventDefault();
    if (isMetaMaskInstalled()) {
      try {
        await connectWalletAndCheckNetwork();
        walletModalHandle(false); // Optionally close the modal if connected
        setIsConnected(true); // Update local state
        updateWalletConnectionStatus(true); // Update global state/context
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      handleMetamaskModal(); // Show modal for MetaMask installation
    }
  };
  return (
    <WalletModalStyleWrapper className="modal_overlay">
        <div className="mint_modal_box">
            <div className="mint_modal_content">
                <div className="modal_header">
                    <h2>{isConnected ? 'Wallet Connected' : 'CONNECT WALLET'}</h2>
                    <button onClick={() => walletModalHandle()}>
                        <FiX />
                    </button>
                </div>
                <div className="modal_body text-center">
                    {isConnected ? (
                        <>
                            <p>Wallet is connected!</p>
                            {/* Add a button to disconnect the wallet */}
                            <Button onClick={disconnectWallet} 
                                    variant="mint" // Assuming 'mint' is the style variant you want
                                    md // Size modifier, if applicable
                                    isCenter // Center button, if applicable
                                    className="banner-btn" // Apply same className for consistent styling
                                  >
                                  Disconnect Wallet</Button>
                          </>
                    ) : (
                        <div className="wallet_list">
                            {/* Wallet connection options */}
                            <a href="#" onClick={handleMetamask}>
                                <img src={metamaskIcon} alt="Meta-mask" />
                                MetaMask
                                <span><FiChevronRight /></span>
                            </a>
                            {/* Consider adding onClick handlers for other wallets */}
                        </div>
                    )}
                    <div className="modal_bottom_text">
                        By connecting your wallet, you agree to our
                        <a href="#">Terms of Service</a> and
                        <a href="#">Privacy Policy</a>.
                    </div>
                </div>
            </div>
        </div>
    </WalletModalStyleWrapper>
  );
};

//   return (
//     <>
//       <WalletModalStyleWrapper className="modal_overlay">
//         <div className="mint_modal_box">
//           <div className="mint_modal_content">
//             <div className="modal_header">
//               <h2>CONNECT WALLET</h2>
//               <p>Please select a wallet to connect to this marketplace</p>
//               <button onClick={() => walletModalHandle()}>
//                 <FiX />
//               </button>
//             </div>
//             <div className="modal_body text-center">
//               {isConnected ? (
                
//                 <p>Wallet is connected!</p>
//               ) : (
//                 <div className="wallet_list">
//                   {/* Wallet connection options here */}
//                   <a href="#" onClick={handleMetamask}>
//                     <img src={metamaskIcon} alt="Meta-mask-Image" />
//                     MetaMask
//                     <span><FiChevronRight /></span>
//                   </a>
//                   {/* Other wallet options remain unchanged */}
//                 </div>
//               )}
//               <div className="modal_bottom_text">
//                 By connecting your wallet, you agree to our
//                 <a href="#">Terms of Service</a> and
//                 <a href="#">Privacy Policy</a>.
//               </div>
//             </div>
//           </div>
//         </div>
//       </WalletModalStyleWrapper>
//     </>
//   );
// };

export default WalletModal;

// import { useModal } from "utils/ModalContext";
// import { FiX, FiChevronRight } from "react-icons/fi";
// import WalletModalStyleWrapper from "./WalletModal.style";
// import { isMetaMaskInstalled, connectWallet, connectWalletAndCheckNetwork } from "lib/metamaskhandler";
// import metamaskIcon from "assets/images/icons/meta-mask.png";
// import coinBase from "assets/images/icons/coinbase.png";
// import trustWalletIcon from "assets/images/icons/trust.png";
// import walletConnect from "assets/images/icons/wallet.png";

// const WalletModal = () => {
//   const { walletModalHandle, handleMetamaskModal } = useModal();

//   const handleMetamask = async (e) => {
//     e.preventDefault()
//     if (!isMetaMaskInstalled()) {
//       handleMetamaskModal();
//     } 
//   }

//   return (
//     <>
//       <WalletModalStyleWrapper className="modal_overlay">
//         <div className="mint_modal_box">
//           <div className="mint_modal_content">
//             <div className="modal_header">
//               <h2>CONNECT WALLET</h2>
//               <p>
//                 Please select a wallet to connect to this marketplace
//               </p>
//               <button onClick={() => walletModalHandle()}>
//                 <FiX />
//               </button>
//             </div>
//             <div className="modal_body text-center">
//               <div className="wallet_list">
//                 <a href="#" onClick={(e) => handleMetamask(e)}>
//                   <img src={metamaskIcon} alt="Meta-mask-Image" />
//                   MetaMask
//                   <span>
//                     <FiChevronRight />
//                   </span>
//                 </a>
//                 <a href="# ">
//                   <img src={coinBase} alt="Coinbase-Image" />
//                   Coinbase
//                   <span>
//                     <FiChevronRight />
//                   </span>
//                 </a>
//                 <a href="# ">
//                   <img src={trustWalletIcon} alt="Trust-Image" />
//                   Trust Wallet
//                   <span>
//                     <FiChevronRight />
//                   </span>
//                 </a>
//                 <a href="# ">
//                   <img src={walletConnect} alt="Wallet-Image" />
//                   WalletConnect
//                   <span>
//                     <FiChevronRight />
//                   </span>
//                 </a>
//               </div>
//               <div className="modal_bottom_text">
//                 By connecting your wallet, you agree to our
//                 <a href="# ">Terms of Service</a>
//                 <a href="#">Privacy Policy</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </WalletModalStyleWrapper>
//     </>
//   );
// };

// export default WalletModal;
