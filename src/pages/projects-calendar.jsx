import { Fragment } from "react";
import { useModal } from "utils/ModalContext";
import GlobalStyles from "assets/styles/GlobalStyles"
import Layout from "components/layout";
import WalletModal from "components/modal/walletModal/WalletModal";
import MetamaskModal from "components/modal/metamaskModal/MetamaskModal";
import Header from "sections/Header/v2";
import PageHeader from "sections/ProjectPages/ProjectCalendar/PageHeader";
import ProjectCalendar from "sections/ProjectPages/ProjectCalendar";
import Footer from "sections/Footer/v1";

export default function ProjectsCalendarPage() {
  const { walletModalvisibility, metamaskModal } = useModal();
  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        {walletModalvisibility && <WalletModal />}
        {metamaskModal && <MetamaskModal />}
        <Header />
        <PageHeader currentPage="CALENDAR VIEW" pageTitle="IGO CALENDAR" />
        <ProjectCalendar />
        <Footer />
      </Layout>
    </Fragment>
  );
}
