import Button from "components/button";
import StakeCardStyleWrapper from "./StakeCard.style";

const StakeCard = () => {
    return (
        <StakeCardStyleWrapper>
            <div className="project-item">
                <div className="project-info">
                    <h4 className="project-title">Participat IGO Stake</h4>
                    <h3 className="project-price">256.50 BUSD</h3>
                    <span>Total Stake</span>
                </div>
                {/* tabs */}
                <ul className="project-listing">
                    <li>
                        <span className="info-text">Lock period: <strong>7 days</strong></span> <span className="info-value">APY Rate</span>
                    </li>
                    <li>
                        <span className="info-text"> Re-locks on registration: <strong>Yes</strong></span>
                        <span className="big-text info-value">12 %</span>
                    </li>
                    <li>
                        <span className="info-text"> Early unstake fee: <strong>25%</strong></span>
                        <span className="info-value">*APY is dynamic</span>
                    </li>
                    <li>
                        <span className="info-text">Status: <strong>Unlocked</strong></span>
                    </li>
                </ul>
                <div className="project-form-list">
                    <h5>Balance: 2889.00 BUSD</h5>
                    <div className="balance-form-area">
                        <label> MAX </label>
                        <input type="text" placeholder="00.00" />
                        <Button sm variant="blue">
                            Approve
                        </Button>
                    </div>
                    <h5>Staked: 256.50 BUSD</h5>
                    <div className="balance-form-area">
                        <label className="max"> MAX </label>
                        <input type="text" placeholder="0.00" />
                        <Button sm variant="dark">
                            Widthdraw
                        </Button>
                    </div>
                </div>
            </div>
        </StakeCardStyleWrapper>
    );
};

export default StakeCard;
