import Button from "components/button";
import CardStyleWrapper from "./StakeAmount.style"

const StakeAmount = () => {
    return (
        <CardStyleWrapper>
            <div className="project-value">
                <h3 className="mb-15">258.90</h3>
                <h6>Staked Amount</h6>
            </div>
            <div className="project-value-image">
                <Button variant="dark">Unstake</Button>
            </div>
        </CardStyleWrapper>
    )
}

export default StakeAmount;