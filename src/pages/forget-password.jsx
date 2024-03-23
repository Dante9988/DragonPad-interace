import { Fragment } from "react";
import { useModal } from "utils/ModalContext";
import GlobalStyles from "assets/styles/GlobalStyles"
import Layout from "components/layout";
import WalletModal from "components/modal/walletModal/WalletModal";
import MetamaskModal from "components/modal/metamaskModal/MetamaskModal";
import Header from "sections/Header/v2";
import ForgetPassword from "sections/AuthPages/ForgetPassword";
import Footer from "sections/Footer/v1";

export default function PasswordReset() {
  const { walletModalvisibility, metamaskModal } = useModal();
  return (
    <Fragment>
      <GlobalStyles />
      <Layout>
        {walletModalvisibility && <WalletModal />}
        {metamaskModal && <MetamaskModal />}
        <Header />
        <ForgetPassword />
        <Footer />
      </Layout>
    </Fragment>
  );
}
