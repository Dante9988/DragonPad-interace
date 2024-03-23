import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Button from "components/button";
import FarmCardStyleWrapper from "./FarmCard.style";
import infoIcon from "assets/images/icons/info-circle.svg";
import linkIcon from "assets/images/icons/link_icon.svg";

const FarmCard = ({ icon, pool, apy, staked, tearned, totalValue }) => {
    const [expand, setExpand] = useState(false);

    return (
        <FarmCardStyleWrapper
            className={`form_item_wrapper ${expand ? "active" : ""}`}
        >
            <ul className="farm_header">
                <li data-title="Pools">
                    <img src={icon} alt="farm icon" />
                    {pool}
                </li>
                <li data-title="APY">{apy}</li>
                <li data-title="STAKED">{staked}</li>
                <li data-title="TEARNED">{tearned}</li>
                <li data-title="TOTAL VALUE LOCKED">{totalValue}</li>
                {/* expand arrow */}
                <li className="expand_arrow" onClick={() => setExpand(!expand)}>
                    <FiChevronDown />
                </li>
            </ul>

            {/* content will show when expanded */}
            <div className="farm_content_wrapper">
                <div className="farm_content_list">
                    <div className="farm_box_item farm_deposit">
                        <label htmlFor="deposit">Deposit</label>

                        <div className="input_box">
                            <input type="text" placeholder="0.00" />
                            <Button href="# " variant="blue" className="approve_btn">
                                {" "}
                                Approve{" "}
                            </Button>
                            <span className="deposite_amout_title">Max</span>
                        </div>

                        <h5>Your balance: 156 BNB</h5>
                    </div>
                    <div className="farm_box_item farm_withdraw">
                        <label htmlFor="deposite">Withdraw</label>

                        <div className="input_box">
                            <input type="text" placeholder="0.00" />
                            <Button href="# " variant="blue" className="approve_btn">
                                {" "}
                                Approve{" "}
                            </Button>
                            <span className="deposite_amout_title">Max</span>
                        </div>

                        <h5>Your balance: 156 BNB</h5>
                    </div>
                    <div className="farm_box_item farm_balance">
                        <h4>Pending Rewards</h4>
                        <div className="fram_wallet">
                            <span>58.99 BNB</span>
                            <Button href="# " variant="blue" className="farm_claim_btn">
                                {" "}
                                Claim{" "}
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="farm_bottom_info">
                    <a href="#">
                        Get ACT -BNB <img src={linkIcon} alt="icon" />
                    </a>
                    <a href="#">
                        View Contract <img src={linkIcon} alt="icon" />
                    </a>
                    <a href="#">
                        Unstaking Fee <img src={infoIcon} alt="icon" />
                    </a>
                </div>
            </div>
        </FarmCardStyleWrapper>
    );
};

export default FarmCard;
