import StakeCard from "./StakeCard/StakeCard"
import StakeChart from "./StakeChart/StakeChart"

import StakingStyleWrapper from "./Staking.style"

const Staking = () => {
    return (
        <StakingStyleWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <StakeCard />
                    </div>
                    <div className="col-lg-6">
                        <StakeChart />
                    </div>
                </div>
            </div>
        </StakingStyleWrapper>
    )
}

export default Staking;