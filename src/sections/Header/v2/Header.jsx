import { useModal } from "utils/ModalContext";
import { MdNotes, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";
import NavWrapper from "./Header.style";
import Button from "components/button";
import MobileMenu from "../MobileMenu/MobileMenu";
import data from "assets/data/menu/menuData";
import logo from "assets/images/logo.png";
import React, { useState, useEffect, useContext } from "react";
import { 
  isAccountConnected, 
  onChainChange, 
  removeChainChangeListener, 
  switchToBscTestnet,
  getChainId,
  onMetamaskconnect,
  switchNetwork,
} from "../../../lib/metamaskhandler"
import styled from "styled-components";
import connectIcon from "assets/images/icons/connect.png"
import NetworkSelector from '../v1/NetworkSelector';
import { ModalContext } from '../../../utils/ModalContext'
// import walletIcon1 from "assets/images/icons/pancake.png"
// import walletIcon2 from "assets/images/icons/uniswap.png"
// import walletIcon3 from "assets/images/icons/market.png"
// import walletIcon4 from "assets/images/icons/gate.png"

const NetworkWarning = styled.div`
  position: absolute;
  top: 20px; // Adjust as needed for your layout
  right: 20px; // Adjust as needed for your layout
  padding: 8px 16px;
  background: red; // Your warning color
  color: white; // Text color that contrasts with your warning color
  border-radius: 4px;
  z-index: 10; // Ensure it's above other elements
`;

const Header = () => {
  const { walletModalHandle } = useModal();
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [userAddress, setUserAddress] = useState('');
  const [isCorrectNetwork, setIsCorrectNetwork] = useState(true);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [selectedNetwork] = useState('');
  const { 
    updateWalletConnectionStatus,
    updateSelectedNetworkByChainId,
    setSelectedNetwork,
  } = useContext(ModalContext);

  const updateNetworkInfo = (_chainId) => {
    const chainIdDecimal = parseInt(_chainId, 16); // Convert hex to decimal
    setIsCorrectNetwork(chainIdDecimal === 1); // Compare with the expected decimal chain ID for Ethereum Mainnet
    updateSelectedNetworkByChainId(_chainId); // Update the selected network in the context
  };

  useEffect(() => {
    // Function to check wallet connection and set up event listeners
    const checkWalletConnectionAndNetwork = async () => {
      if (window.ethereum) {
        // Check if any accounts are connected
        setSelectedNetwork('Base');
        const accounts = await isAccountConnected();
        updateWalletConnectionStatus(accounts.length > 0);
        if (accounts.length > 0) {
          setUserAddress(accounts[0]);
        }

        // Check the current chain immediately and set up listeners
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        updateNetworkInfo(chainId);

        // Listen for chain changes to update the state
        window.ethereum.on('chainChanged', updateNetworkInfo);

        // Listen for the connect event as well, which includes the chain ID
        window.ethereum.on('connect', (info) => updateNetworkInfo(info.chainId));

        // Cleanup function to remove listeners
        return () => {
          window.ethereum.removeListener('chainChanged', updateNetworkInfo);
          window.ethereum.removeListener('connect', updateNetworkInfo);
        };
      }
    };

    checkWalletConnectionAndNetwork();
  }, [updateWalletConnectionStatus, updateSelectedNetworkByChainId]);
  // useEffect(() => {
  //   const checkWalletConnectionAndNetwork = async () => {
  //     if (window.ethereum) {
  //       const accounts = await isAccountConnected();
  //       setIsWalletConnected(accounts.length > 0);
  //       if (accounts.length > 0) {
  //         setUserAddress(accounts[0]);
  //       }
  
  //       // This function will update the network state
  //       const updateNetworkState = (_chainId) => {
  //         const chainIdDecimal = parseInt(_chainId, 16); // Convert hex to decimal
  //         setIsCorrectNetwork(chainIdDecimal === 11155111);
  //       };
  
  //       // Listen for chain changes to update the state
  //       window.ethereum.on('chainChanged', updateNetworkState);
  
  //       // Listen for the connect event as well, which includes the chain ID
  //       window.ethereum.on('connect', (info) => updateNetworkState(info.chainId));
  
  //       // Check the current chain immediately
  //       const chainId = await window.ethereum.request({ method: 'eth_chainId' });
  //       updateNetworkState(chainId);
  
  //       // Cleanup function to remove listeners
  //       return () => {
  //         window.ethereum.removeListener('chainChanged', updateNetworkState);
  //         window.ethereum.removeListener('connect', (info) => updateNetworkState(info.chainId));
  //       };
  //     }
  //   };

  // checkWalletConnectionAndNetwork();
  // }, []);

  const handleConnectOrSwitchNetwork = async (e) => {
    e.preventDefault(); // Prevent the default action of the button
    if (selectedNetwork && !isCorrectNetwork) {
      await handleSwitchNetwork(selectedNetwork);
    } else {
      walletModalHandle();
      console.log(selectedNetwork)

    }
  };

  const handleSwitchNetwork = async (networkName) => {
    try {
      const chainId = await switchNetwork(networkName);
      setIsCorrectNetwork(chainId === await getChainId()); // Update network state
      setSelectedNetwork(networkName); // Update the selected network state
    } catch (error) {
      // Handle errors, for example, show an error message to the user
      console.error('Failed to switch the network:', error);
    }
  };

  const formatAddress = (address) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  const handleWalletBtn = (e) => {
    e.preventDefault();
    walletModalHandle();
  };

  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };

  return (
    <>
      {isWalletConnected && !isCorrectNetwork && (
        <NetworkWarning>WRONG NETWORK</NetworkWarning>
      )}
    <NavWrapper className="gamfi_header" id="navbar">
      <div className="container">
        <div className="gamfi_menu_sect">
          <div className="gamfi_menu_left_sect">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="gamfi nft logo" />
              </a>
            </div>
          </div>
          <div className="gamfi_menu_right_sect gamfi_v1_menu_right_sect">
            <div className="gamfi_menu_list">
              {/* Existing menu items */}
              <ul>
                {/* menu  */}
                {data?.map((menu, i) => (
                  <li key={i}>
                    <a href={menu.url}>{menu.title} {menu.subMenus?.length > 0 && <MdOutlineKeyboardArrowDown />}</a>

                    {/* if has subMenu and length is greater than 0 */}
                    {menu.subMenus?.length > 0 && (
                      <ul className="sub_menu_list">
                        {menu.subMenus?.map((subMenu, i) => (
                          <li key={i}>
                            <a href={subMenu.url}>{subMenu.title} {subMenu?.subMenuChilds?.length > 0 && <MdOutlineKeyboardArrowRight />}</a>

                            {/* if subMenu child has menu child */}
                            {subMenu?.subMenuChilds?.length > 0 && (
                              <ul className="sub_menu_child_list">
                                {subMenu?.subMenuChilds?.map((subChild, i) => (
                                  <li key={i}>
                                    <a href={subChild.url}> {subChild.title} </a>
                                  </li>

                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="gamfi_menu_btns">
            <w3m-network-button> </w3m-network-button>
              <button className="menu_btn" onClick={handleMobileMenu}>
                <MdNotes />
              </button>
              <w3m-button />
              {/* <Button
                href="# "
                sm
                variant="white"
                className={`connect_btn ${!isCorrectNetwork ? 'warning' : ''}`}
                onClick={handleConnectOrSwitchNetwork}
              >
                <img src={connectIcon} alt="icon" />
                {
                  isWalletConnected ? 
                    (
                      isCorrectNetwork ? 
                        formatAddress(userAddress) : 
                        `Switch to ${selectedNetwork}`
                    ) : 
                    'Connect'
                }
              </Button> */}
              {/* <Button
                href="# "
                sm
                variant="white"
                className={`connect_btn ${!isCorrectNetwork ? 'warning' : ''}`}
                onClick={handleConnectOrSwitchNetwork}
              >
                <img src={connectIcon} alt="icon" />
                {isWalletConnected ? (isCorrectNetwork ? formatAddress(userAddress) : 'Switch') : 'Connect'}
              </Button> */}
            </div>
          </div>
        </div>
        {isMobileMenu && <MobileMenu mobileMenuHandle={handleMobileMenu} />}
      </div>
    </NavWrapper>
    </>
  );
};

export default Header;