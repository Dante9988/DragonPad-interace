import { Fragment } from "react";
import { useModal } from "utils/ModalContext";
import Layout from "components/layout";
import GlobalStyles from "assets/styles/GlobalStyles"
import WalletModal from "components/modal/walletModal/WalletModal";
import MetamaskModal from "components/modal/metamaskModal/MetamaskModal";
import Header from "sections/Header/v2";
import PageHeader from "sections/StakingPages/v1/PageHeader";
import Staking from "sections/StakingPages/v1";
import Footer from "sections/Footer/v1";

export default function StakingOne() {
  const { walletModalvisibility, metamaskModal } = useModal();
  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        {walletModalvisibility && <WalletModal />}
        {metamaskModal && <MetamaskModal />}
        <Header />
        <PageHeader currentPage="staking" pageTitle="STAKING v1" />
        <Staking />
        <Footer />
      </Layout>
    </Fragment>
  );
}
