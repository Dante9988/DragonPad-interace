import StakeChart from "./StakeChart/StakeChart"
import SideBar from "./SideBar/Sidebar"
import ProjectMeta from "./ProjectMeta/ProjectMeta"
import StakeWallet from "./StakeWallet/StakeWallet"

import StakingStyleWrapper from "./Staking.style"

const Staking = () => {
    return (
        <StakingStyleWrapper>
            <div className="container">
                <StakeChart />
                <div className="row page_inner_row">
                    <div className="col-lg-4">
                        <SideBar />
                    </div>
                    <div className="col-lg-4">
                        <ProjectMeta />
                    </div>
                    <div className="col-lg-4">
                        <StakeWallet />
                    </div>
                </div>
            </div>
        </StakingStyleWrapper>
    )
}

export default Staking;