import { useState } from "react"
import Button from "components/button";
import CardHover from "components/cardHover";
import StakingItemStyleWrapper from "./StakingItem.style"
import backIcon from "assets/images/icons/x.svg"

const StakingItem = ({
    title,
    icon,
    end,
    apy,
    tvl,
    minimumLocked,
    stake,
    Rewards,
    amountStaked,
    balance,

}) => {

    const [isFlip, setFlip] = useState(false)

    const handleFlip = (e) => {
        e.preventDefault()
        setFlip(false)
        setFlip(true)
    }

    return (
        <StakingItemStyleWrapper>
            <div className={`staking_flip_card_inner ${isFlip === true ? 'active' : ''}`}>
                <div className="staking_flip_card_front">
                    <div className="staking_flip_card_front_headings">
                        <h2>{title}</h2>
                        <span><img src={icon} alt="icon" /></span>
                    </div>
                    <div className="staking_flip_card_front_body">
                        <div className="staking_flip_card_front_timebg">
                            <span>{end} days</span>
                        </div>
                        <div className="staking_apy">
                            <h3>{apy} APY</h3>
                        </div>
                        <ul className="staking_flip_card_front_list">
                            <li><span>TVL</span> <strong>{tvl} BUSD</strong></li>
                            <li><span>Minimum Locked</span> <strong>{minimumLocked} BUSD</strong></li>
                            <li><span>Stake</span> <strong>{stake} BUSD</strong></li>
                        </ul>
                        <div className="staking_flip_card_front_buttons">
                            <Button variant="blue" href="# " onClick={handleFlip}>
                                stake
                            </Button>
                            <Button variant="dark" href="# " onClick={handleFlip}>
                                unstake
                            </Button>
                        </div>
                        <div className="staking_flip_card_front_reward">
                            <h6>Rewards</h6>
                            <h5>{Rewards} BUSD</h5>
                        </div>
                        <div className="staking_flip_card_front_buttons flip_card_btn">
                            <Button variant="dark" href="# " onClick={handleFlip}>
                                Restake
                            </Button>
                            <Button variant="dark" href="# " onClick={handleFlip}>
                                Withdraw
                            </Button>
                        </div>
                    </div>
                </div>

                {/* card back */}
                <div className="staking_flip_card_back">
                    <div className="staking_flip_card_back_content active-shape">
                        <div className="staking_flip_card_back_overlay"></div>
                        <div className="staking_flip_card_back_headings">
                            <h2>Stake</h2>
                            <button className="staking_flip_card_close_btn" onClick={() => setFlip(false)}><img src={backIcon} alt="icon" /></button>
                        </div>
                        <div className="staking_flip_card_back_body">
                            <div className="staking_flip_card_back_body_top">
                                <div className="staking_flip_card_front_list">
                                    <ul>
                                        <li><span>Amount staked</span> <strong>{amountStaked} BUSD</strong></li>
                                        <li><span>Balance</span> <strong>{balance} BUSD</strong></li>
                                    </ul>
                                </div>

                                <div className="staking_flip_card_back_form">
                                    <form>
                                        <span>Stake Amount</span>
                                        <div className="staking_flip_card_back_form_input">
                                            <input type="text" placeholder="0.00 BUSD" />
                                            <button>Max</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="staking_flip_card_back_approve_btn">
                                <Button variant="blue" href="# ">
                                    Approve
                                </Button>
                            </div>
                        </div>
                    </div>

                    <CardHover />
                </div>
            </div>
        </StakingItemStyleWrapper>
    )
}

export default StakingItem;