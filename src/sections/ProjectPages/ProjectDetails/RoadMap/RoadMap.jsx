import RoadMapStyleWrapper from "./RoadMap.style";
import data from "assets/data/roadMap/dataV2"

const RoadMap = () => {
    return (
        <RoadMapStyleWrapper id="roadmap">
            <h4 className="widget_title">Roadmap</h4>
            <div className="row roadmap_items_row">
                {data?.map((item, i) => (
                    <div key={i} className="col-md-6">
                        <div className="roadmap_item">
                            <h4 className={`roadmap_title ${item.isLunched && 'roadmap_title_done'}`}>{item.title}</h4>
                            <ul>
                                {item.checkList?.map((child, i) => (
                                    <li key={i}>
                                        <img src={child.icon} alt="icon" />
                                        {child.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </RoadMapStyleWrapper>
    )
}

export default RoadMap;