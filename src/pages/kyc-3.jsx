import { Fragment } from "react";
import { useModal } from "utils/ModalContext";
import GlobalStyles from "assets/styles/GlobalStyles"
import Layout from "components/layout";
import WalletModal from "components/modal/walletModal/WalletModal";
import MetamaskModal from "components/modal/metamaskModal/MetamaskModal";
import Header from "sections/Header/v2";
import PageHeader from "sections/KYCPages/v3/PageHeader";
import Kyc from "sections/KYCPages/v3";
import Footer from "sections/Footer/v1";

export default function KycPageThree() {
  const { walletModalvisibility, metamaskModal } = useModal();
  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        {walletModalvisibility && <WalletModal />}
        {metamaskModal && <MetamaskModal />}
        <Header />
        <PageHeader currentPage="KYC" pageTitle="KYC PROCESS" />
        <Kyc />
        <Footer />
      </Layout>
    </Fragment>
  );
}
