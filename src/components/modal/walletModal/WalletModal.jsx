import { useModal } from "utils/ModalContext";
import { FiX, FiChevronRight } from "react-icons/fi";
import React, { useEffect, useState } from 'react';
import WalletModalStyleWrapper from "./WalletModal.style";
import { isMetaMaskInstalled, connectWalletAndCheckNetwork, isAccountConnected, disconnectWallet, onChainChange } from "lib/metamaskhandler";
import Button from "components/button";
import metamaskIcon from "assets/images/icons/meta-mask.png";
// import coinBase from "assets/images/icons/coinbase.png";
// import trustWalletIcon from "assets/images/icons/trust.png";
// import walletConnect from "assets/images/icons/wallet.png";

const WalletModal = () => {
  const { walletModalHandle, handleMetamaskModal, updateWalletConnectionStatus } = useModal();
  const [isConnected, setIsConnected] = useState(false);
  const [isCorrectNetwork, setIsCorrectNetwork] = useState(true);

  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      if(window.ethereum) {
      const accounts = await isAccountConnected();
      setIsConnected(accounts && accounts.length > 0);
      
      // Check network immediately
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      setIsCorrectNetwork(chainId === '0x61'); // BSC Testnet chain ID in hexadecimal

      // Listen for chain changes to adjust network correctness
      onChainChange((_chainId) => {
        setIsCorrectNetwork(_chainId === '0x61');
      });
    };
  }

    checkIfWalletIsConnected();
  }, []);

  const handleMetamask = async (e) => {
    e.preventDefault();
    if (isMetaMaskInstalled()) {
      try {
        await connectWalletAndCheckNetwork();
        walletModalHandle(false); // Close modal if connected
        setIsConnected(true);
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      handleMetamaskModal(); // Show modal for MetaMask installation
    }
  };

  // useEffect(() => {
  //   //const ethereum = window.ethereum;
  //     const checkNetworkAndConnection = async () => {
  //       const accounts = await isAccountConnected();
  //       setIsConnected(accounts && accounts.length > 0);
  
  //       const checkNetwork = (_chainId) => {
  //         // BSC Testnet chainId is '0x61' (97 in decimal)
  //         setIsCorrectNetwork(_chainId === '0x61');
  //       };
  
  //       // Immediately invoke to check current network
  //       window.ethereum && checkNetwork(window.ethereum.chainId);
  
  //       // Listen for chain changes
  //       onChainChange(checkNetwork);
  
  //       return () => window.ethereum && window.ethereum.removeListener('chainChanged', checkNetwork);
  //     };
  
  //     checkNetworkAndConnection();
  // }, [updateWalletConnectionStatus]); // Depend on context method to re-check if it changes

  // const handleMetamask = async (e) => {
  //   e.preventDefault();
  //   if (isMetaMaskInstalled()) {
  //     try {
  //       await connectWalletAndCheckNetwork();
  //       walletModalHandle(false); // Optionally close the modal if connected
  //       setIsConnected(true); // Update local state
  //       updateWalletConnectionStatus(true); // Update global state/context
  //     } catch (error) {
  //       console.error('Error connecting to MetaMask:', error);
  //     }
  //   } else {
  //     handleMetamaskModal(); // Show modal for MetaMask installation
  //   }
  // };
  return (
    <WalletModalStyleWrapper className="modal_overlay">
      <div className="mint_modal_box">
        <div className="mint_modal_content">
          <div className="modal_header">
            <h2>{isConnected ? (isCorrectNetwork ? 'Wallet Connected' : 'Incorrect Network') : 'CONNECT WALLET'}</h2>
            <button onClick={() => walletModalHandle()}>
              <FiX />
            </button>
          </div>
          <div className="modal_body text-center">
            {isConnected ? (
              isCorrectNetwork ? (
                <>
                  <p>Wallet is connected!</p>
                  <Button onClick={disconnectWallet}
                          variant="mint"
                          md
                          isCenter
                          className="banner-btn">
                    Disconnect Wallet
                  </Button>
                </>
              ) : (
                <p>Please switch to the BSC Testnet.</p>
              )
            ) : (
              <div className="wallet_list">
                <a href="#" onClick={handleMetamask}>
                  <img src={metamaskIcon} alt="Meta-mask" />
                  MetaMask
                  <span><FiChevronRight /></span>
                </a>
                {/* Additional wallet options... */}
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

export default WalletModal;

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
