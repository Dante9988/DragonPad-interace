import { useState } from "react";
import { ModalContext } from "./ModalContext";

const ContextProvider = ({ children }) => {
  const [walletModalvisibility, setModalvisibility] = useState(false);
  const [shareModalVisibility, setShareModalvisibility] = useState(false);
  const [metamaskModal, setMetamaskModal] = useState(false);
  const [accounts, setAccounts] = useState(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState('Base');

  const NETWORK_NAMES = {
    '0x1': 'Ethereum',
    '0x38': 'BSC',
    '0x89': 'Polygon',
    // Add more mappings as needed
  };

  const updateWalletConnectionStatus = (status) => {
    setIsWalletConnected(status);
  };

  const handleAccountConnect = (acc) => {
    setAccounts(acc);
  };

  const walletModalHandle = () => {
    setModalvisibility(!walletModalvisibility);
  };

  const shareModalHandle = (e) => {
    e.preventDefault();
    setShareModalvisibility(!shareModalVisibility);
  };

  const handleMetamaskModal = () => {
    setModalvisibility(!walletModalvisibility);
    setMetamaskModal(!metamaskModal);
  };

  const updateSelectedNetworkByChainId = (chainId) => {
    const networkName = NETWORK_NAMES[chainId];
    if (networkName) {
      setSelectedNetwork(networkName);
    } else {
      // Handle unknown chainId
      console.warn(`Unknown network chain ID: ${chainId}`);
    }
  };

  return (
    <ModalContext.Provider
      value={{
        walletModalHandle,
        walletModalvisibility,
        shareModalVisibility,
        shareModalHandle,
        metamaskModal,
        handleMetamaskModal,
        handleAccountConnect,
        updateWalletConnectionStatus,
        isWalletConnected,
        accounts,
        selectedNetwork,
        setSelectedNetwork,
        updateSelectedNetworkByChainId,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ContextProvider;
