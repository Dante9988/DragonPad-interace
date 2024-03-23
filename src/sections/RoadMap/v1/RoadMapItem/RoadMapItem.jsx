import RoadMapItemStyleWrapper from "./RoadMapItem.style"
import checkIcon from "assets/images/icons/roadmapChackicon.svg"

const RoadMapItem = ({ title, isLunched, checkList }) => {
    return (
        <RoadMapItemStyleWrapper>
            <h4 className="roadmap_title">{title}</h4>
            <div className="roadmap_content">
                <div className="roadmap_status_icon">
                    {isLunched && <span> <img src={checkIcon} alt="icon" /></span>}
                </div>
                <ul className="roadmap_list">
                    {checkList?.map((item, i) => (

                        <li key={i}>
                            <img src={item.icon} alt="icon" className="img-fluid" />
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
        </RoadMapItemStyleWrapper>
    )
}

export default RoadMapItem;