import Button from "components/button";
import ProjectMetaStyleWrapper from "./ProjectMeta.style"

const ProjectMeta = () => {
    return (
        <ProjectMetaStyleWrapper>
            <div className="project_meta_item">
                <h4>Connected MetaMask</h4>
                <p>If not connected, click the "Connect Wallet" button in the top right corner</p>
            </div>
            <div className="project_meta_item">
                <h4>Available Balance</h4>
                <p>Current Balance: 38.00 You must have balance in wallet</p>
            </div>
            <div className="project_meta_item">
                <h4>Eligible to stake</h4>
                <p>You cannot stake if you have an active unstake/withdrawal request</p>
            </div>
            <div className="project_meta_btns">
                <Button sm variant="blue">
                    Next
                </Button>
                <Button sm variant="dark">
                    Previous
                </Button>
            </div>
        </ProjectMetaStyleWrapper>
    )
}

export default ProjectMeta;