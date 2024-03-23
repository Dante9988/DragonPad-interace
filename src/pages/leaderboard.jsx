import { Fragment } from "react";
import { useModal } from "utils/ModalContext";
import Layout from "components/layout";
import GlobalStyles from "assets/styles/GlobalStyles"
import WalletModal from "components/modal/walletModal/WalletModal";
import MetamaskModal from "components/modal/metamaskModal/MetamaskModal";
import Header from "sections/Header/v2";
import PageHeader from "sections/LeaderboardPage/PageHeader";
import Leaderboard from "sections/LeaderboardPage";
import Footer from "sections/Footer/v1";

export default function LeaderboardPage() {
  const { walletModalvisibility, metamaskModal } = useModal();
  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        {walletModalvisibility && <WalletModal />}
        {metamaskModal && <MetamaskModal />}
        <Header />
        <PageHeader currentPage="ledearboard" pageTitle="ledearboard" />
        <Leaderboard />
        <Footer />
      </Layout>
    </Fragment>
  );
}
