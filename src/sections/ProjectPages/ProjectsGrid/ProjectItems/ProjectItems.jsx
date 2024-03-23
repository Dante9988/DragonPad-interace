import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import nextArrowIcon from "assets/images/icons/next-arrow.png"
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectItemsStyleWrapper from "./ProjectItems.style";
import projectData from "assets/data/projects/dataV7";

import coinIcon1 from "assets/images/project/previous-image.png"
import coinIcon2 from "assets/images/project/previous-image2.png"
import coinIcon3 from "assets/images/project/previous-image3.png"
import coinIcon4 from "assets/images/project/chain.png"

const ProjectItems = () => {
  const { data } = projectData;
  return (
    <ProjectItemsStyleWrapper>
      <div className="container">
        <div className="single-project-row">

          <Tabs>
            <TabList>
              <div className="tab_btn_wrapper">
                {data?.map((child, i) => (
                  <Tab key={i}>
                    <button>
                      {child.projectStatus}
                    </button>
                  </Tab>
                ))}
              </div>

              <div className="item_sorting_list">
                <button>
                  All Access
                  <img src={nextArrowIcon} alt="icon" />
                  <ul className="sub-menu">
                    <li>All Access</li>
                    <li>Public</li>
                    <li>Private</li>
                    <li>Community</li>
                  </ul>
                </button>
                <button>
                  All Block Chain
                  <img src={nextArrowIcon} alt="icon" />
                  <ul className="sub-menu">
                    <li><img src={coinIcon1} alt="icon" /> Binance (BSC)</li>
                    <li><img src={coinIcon2} alt="icon" /> Ethereum (ETH)</li>
                    <li><img src={coinIcon3} alt="icon" /> Polygon</li>
                    <li><img src={coinIcon4} alt="icon" /> All Block Chain</li>
                  </ul>
                </button>
              </div>
            </TabList>

            {data?.map((items, i) => (
              <TabPanel key={i} className="row tabs-row">
                {items.projects?.map((project, i) => (
                  <div key={i} className="col-lg-4 col-md-6">
                    <ProjectCard key={i} {...project} />
                  </div>
                ))}
              </TabPanel>
            ))}

          </Tabs>
        </div>
      </div>
    </ProjectItemsStyleWrapper>
  );
};

export default ProjectItems;
