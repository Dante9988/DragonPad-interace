import StakeParticipate from "./StakeParticipate/StakeParticipate"
import StakeAmount from "./StakeAmout/StakeAmount"
import UnstakeAmount from "./UnstakeAmount/UnstakeAmount"
import Points from "./Points/Points"
import StakeHistory from "./StakeHistory/StakeHistory"
import StakingStyleWrapper from "./Staking.style"

const Staking = () => {
    return (
        <StakingStyleWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <StakeParticipate />
                    </div>
                    <div className="col-lg-6">
                        <StakeAmount />
                        <UnstakeAmount />
                        <Points />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <StakeHistory />
                    </div>
                </div>
            </div>
        </StakingStyleWrapper>
    )
}

export default Staking;