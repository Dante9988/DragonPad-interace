import { Routes, Route } from "react-router-dom";
import HomeOne from "pages/home-one";
// import HomeTwo from "pages/home-two";
// import HomeThree from "pages/home-three";
import ProjectsClassic from "pages/projects-classic-1";
import ProjectsList from "pages/projects-list";
import ProjectsGrid from "pages/projects-grid";
import ProjectsCalendar from "pages/projects-calendar";
import ProjectDetails from "pages/project-details-1";
// import StakingOne from "pages/staking-1";
// import StakingTwo from "pages/staking-2";
// import StakingThree from "pages/staking-3";
// import StakingFour from "pages/staking-4";
// import StakingFive from "pages/staking-5";
// import KycOne from "pages/kyc-1";
// import KycTwo from "pages/kyc-2";
// import KycThree from "pages/kyc-3";
// import Signin from "pages/login";
// import Signup from "pages/register";
// import ForgetPassword from "pages/forget-password";
// import Farming from "pages/farming";
// import Leaderboard from "pages/leaderboard";
// import IGORanking from "pages/igo-ranking";
// import IgoApply from "pages/igo-apply";
import RoadmapDetails from "pages/roadmap-details";
import TeamDetails from "pages/team-details";
import Contact from "pages/contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeOne />} exact />

      {/* <Route path="/home-two" element={<HomeTwo />} />
      <Route path="/home-three" element={<HomeThree />} /> */}
      <Route path="/projects-list" element={<ProjectsList />} />
      <Route path="/projects-classic-1" element={<ProjectsClassic />} />
      <Route path="/projects-grid" element={<ProjectsGrid />} />
      <Route path="/projects-calendar" element={<ProjectsCalendar />} />
      <Route path="/projects-details-1" element={<ProjectDetails />} />
      {/* <Route path="/staking-1" element={<StakingOne />} />
      <Route path="/staking-2" element={<StakingTwo />} />
      <Route path="/staking-3" element={<StakingThree />} />
      <Route path="/staking-4" element={<StakingFour />} />
      <Route path="/staking-5" element={<StakingFive />} />
      <Route path="/kyc-1" element={<KycOne />} />
      <Route path="/kyc-2" element={<KycTwo />} />
      <Route path="/kyc-3" element={<KycThree />} /> */}
      {/* <Route path="/login" element={<Signin />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/farming" element={<Farming />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/igo-ranking" element={<IGORanking />} />
      <Route path="/igo-apply" element={<IgoApply />} /> */}
      <Route path="/roadmap-details" element={<RoadmapDetails />} />
      <Route path="/team-details" element={<TeamDetails />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
