import { Fragment } from "react";
import { useModal } from "utils/ModalContext";
import Layout from "components/layout";
import GlobalStyles from "assets/styles/GlobalStyles"
import WalletModal from "components/modal/walletModal/WalletModal";
import MetamaskModal from "components/modal/metamaskModal/MetamaskModal";
import ShareModal from "components/modal/shareModal/ShareModal";
import Header from "sections/Header/v2";
import PageHeader from "sections/ProjectPages/ProjectDetails/v1/PageHeader";
import ProjectDetails from "sections/ProjectPages/ProjectDetails/v1";
import Footer from "sections/Footer/v1";

export default function ProjectsDetailsOne() {
  const { walletModalvisibility, metamaskModal, shareModalVisibility } = useModal();
  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        {walletModalvisibility && <WalletModal />}
        {metamaskModal && <MetamaskModal />}
        {shareModalVisibility && <ShareModal />}
        <Header />
        <PageHeader currentPage="PROJECT DETAILS " />
        <ProjectDetails />
        <Footer />
      </Layout>
    </Fragment>
  );
}
