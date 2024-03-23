import { Fragment } from "react";
import { useModal } from "utils/ModalContext";
import Layout from "components/layout";
import GlobalStyles from "assets/styles/GlobalStyles"
import WalletModal from "components/modal/walletModal/WalletModal";
import MetamaskModal from "components/modal/metamaskModal/MetamaskModal";
import Header from "sections/Header/v2";
import PageHeader from "sections/KYCPages/v1/PageHeader";
import Kyc from "sections/KYCPages/v1";
import Footer from "sections/Footer/v1";

export default function KycPageOne() {
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
