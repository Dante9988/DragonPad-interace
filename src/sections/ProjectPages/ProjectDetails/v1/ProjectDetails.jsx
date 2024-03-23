import Sidebar from "../SideBar"
import ProjectInfo from "../ProjectInfo/"
import TokenInfo from "../TokenInfo/TokenInfo"
import Summary from "../Summary/Summary"
import Schedule from "../Schedule/Schedule"
import Comparison from "../Comparison/Comparison"
import Statistics from "../Statistics"
import RoadMap from "../RoadMap/RoadMap"
import Team from "../Team"
import Partner from "../Investor"

import ProjectDetailsStyleWrapper from "./ProjectDetails.style"
import tokenData from "assets/data/token/dataV2"

const ProjectDetails = () => {
    return (
        <ProjectDetailsStyleWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ProjectInfo />
                    </div>
                </div>
                <div className="row token_info_row">
                    {tokenData?.map((item, i) => (
                        <div key={i} className="col-sm-6">
                            <TokenInfo {...item} />
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Sidebar />
                    </div>
                    <div className="col-md-8">
                        <Summary />
                        <Schedule />
                        <Comparison />
                        <Statistics />
                        <RoadMap />
                        <Team />
                        <Partner />
                    </div>
                </div>
            </div>
        </ProjectDetailsStyleWrapper>
    )
}

export default ProjectDetails;