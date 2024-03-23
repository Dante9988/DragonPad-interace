import Button from "components/button";
import CardStyleWrapper from "./Points.style"

const Points = () => {
    return (
        <CardStyleWrapper>
            <div className="project-value">
                <h3 className="mb-15">0.58</h3>
                <h6>Rewards Points</h6>
            </div>
            <div className="project-value-image">
                <Button variant="dark">Withdraw</Button>
            </div>
        </CardStyleWrapper>
    )
}

export default Points;