import { Fragment } from "react";
import { useModal } from "utils/ModalContext";
import GlobalStyles from "assets/styles/GlobalStyles"
import Layout from "components/layout";
import WalletModal from "components/modal/walletModal/WalletModal";
import MetamaskModal from "components/modal/metamaskModal/MetamaskModal";
import Header from "sections/Header/v1";
import Banner from "sections/Banner/v3";
import Token from "sections/Token/v1";
import ExploreProjects from "sections/Projects/v5";
import Tutorial from "sections/Tutorial/v2";
import Features from "sections/Features/v2";
import Partner from "sections/Partner/v2";
import Faq from "sections/Faq/v2";
import Footer from "sections/Footer/v1";

export default function HomeThree() {
  const { walletModalvisibility, metamaskModal } = useModal();
  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        {walletModalvisibility && <WalletModal />}
        {metamaskModal && <MetamaskModal />}
        <Header />
        <Banner />
        <Token />
        <ExploreProjects />
        <Tutorial />
        <Features />
        <Partner />
        <Faq />
        <Footer />
      </Layout>
    </Fragment>
  );
}
