import RoadMapDetailsStyleWrapper from "./RoadMapDetails.style";
import roadmapData from "assets/data/roadMap/dataV3";

const RoadMapDetails = () => {
  return (
    <RoadMapDetailsStyleWrapper>
      <div className="container">
        <div className="roadmap_items_row">
          {roadmapData?.map((roadmap, i) => (
            <div
              key={i}
              className={`roadmap_item ${roadmap.isLunched === true ? "shape_active" : ""
                }`}
            >
              <div className="roadmap_item_inner">
                <h4 className="roadmap_title">{roadmap.title}</h4>
                <ul className="roadmap_check_list">
                  {roadmap.checkList?.map((item, i) => (
                    <li key={i}>
                      <img src={item.icon} alt="icon" />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RoadMapDetailsStyleWrapper>
  );
};

export default RoadMapDetails;
