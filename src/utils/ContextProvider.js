import { useState } from "react";
import { ModalContext } from "./ModalContext";

const ContextProvider = ({ children }) => {
  const [walletModalvisibility, setModalvisibility] = useState(false);
  const [shareModalVisibility, setShareModalvisibility] = useState(false);
  const [metamaskModal, setMetamaskModal] = useState(false);
  const [accounts, setAccounts] = useState(null);

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
        accounts,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ContextProvider;
