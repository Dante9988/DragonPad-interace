import Button from "components/button";
import CardStyleWrapper from "./UnstakeAmount.style"

const UnstakeAmount = () => {
    return (
        <CardStyleWrapper>
            <div className="project-value">
                <h3 className="mb-15">25.00</h3>
                <h6>Unstaked Amount</h6>
            </div>
            <div className="project-value-image">
                <Button variant="dark">Restake</Button>
            </div>
        </CardStyleWrapper>
    )
}

export default UnstakeAmount;