import { Fragment } from "react";
import { useModal } from "utils/ModalContext";
import Layout from "components/layout";
import GlobalStyles from "assets/styles/GlobalStyles"
import WalletModal from "components/modal/walletModal/WalletModal";
import MetamaskModal from "components/modal/metamaskModal/MetamaskModal";
import Header from "sections/Header/v2";
import PageHeader from "sections/ContactPage/PageHeader";
import Contact from "sections/ContactPage";
import Footer from "sections/Footer/v1";

export default function ContactPage() {
  const { walletModalvisibility, metamaskModal } = useModal();
  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        {walletModalvisibility && <WalletModal />}
        {metamaskModal && <MetamaskModal />}
        <Header />
        <PageHeader currentPage="CONTACT US" pageTitle="GET IN TOUCH" />
        <Contact />
        <Footer />
      </Layout>
    </Fragment>
  );
}
