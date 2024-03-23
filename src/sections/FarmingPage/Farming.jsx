import { Tab, Tabs, TabList, TabPanel } from "react-tabs"; 
import FarmCard from "./FarmCard/FarmCard"
import FarmingStyleWrapper from "./Farming.style"
import farmingData from "assets/data/farming/dataV1"
import nextArrowIcon from "assets/images/icons/next-arrow.png"

const Farming = () => {
    const { data } = farmingData;

    return (
        <FarmingStyleWrapper>
            <div className="container">

                <Tabs>
                    <TabList>
                        <div className="tab_btn_wrapper">
                            {data?.map((child, i) => (
                                <Tab key={i}>
                                    <button>
                                        {child.projectTitle}
                                    </button>
                                </Tab>
                            ))}
                            <div className="farm_sorting_switch">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                                <span className="title">Staked Only</span>
                            </div>
                        </div>

                        <div className="item_sorting_list">
                            <button>
                                All Access
                                <img src={nextArrowIcon} alt="icon" />
                                <ul className="sub-menu">
                                    <li>All Pools</li>
                                    <li>Public</li>
                                    <li>Private</li>
                                    <li>Community</li>
                                </ul>
                            </button>
                        </div>
                    </TabList>

                    {data?.map((items, i) => (
                        <TabPanel key={i} className="tabs-row">
                            {items.projects?.map((project, i) => (
                                <FarmCard key={i} {...project} />
                            ))}
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </FarmingStyleWrapper>
    )
}

export default Farming