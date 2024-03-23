import Button from "components/button";
import StakeWalletStyleWrapper from "./StakeWallet.style"

const StakeWallet = () => {
    return (
        <StakeWalletStyleWrapper>
            <div className="project_meta_item">
                <div className="meta_header">
                    <h3>256.50</h3>
                    <span>Your Staked</span>
                </div>
                <div className="meta_content">
                    <div className="meta_header balance">
                        <h3>38.00 BUSD</h3>
                        <span>Your Rewards</span>
                    </div>

                    <div className="project_meta_btns">
                        <Button sm variant="blue">
                            Stake
                        </Button>
                        <Button sm variant="dark">
                            Withdraw
                        </Button>
                    </div>
                </div>
            </div>
        </StakeWalletStyleWrapper>
    )
}

export default StakeWallet;