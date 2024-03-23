import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { SectionTitle } from "components/sectionTitle";
import Button from "components/button";
import shapeImg from "assets/images/bg/RoadMapV2Fram.png";
import roadmapData from "assets/data/roadMap/dataV1";
import RoadMapItem from "./RoadMapItem/RoadMapItem";
import RoadMapStyleWrapper from "./RoadMap.style";

const RoadMap = () => {
  const { data } = roadmapData;

  return (
    <RoadMapStyleWrapper>
      <div className="container">
        <SectionTitle title="ROADMAPS" subtitle="OUR GOALS " />

        <div className="roadmap_content">
          <Tabs>
            <TabList>
              {data?.map((item, i) => (
                <Tab key={i}>
                  <Button
                    href="# "
                    variant="outline"
                    sm
                    onClick={(e) => e.preventDefault()}
                  >
                    {item.year}
                  </Button>
                </Tab>
              ))}
            </TabList>

            {data?.map((roadMaps, i) => (
              <TabPanel key={i} className="row tabs-row">
                {roadMaps.items?.map((roadMap, i) => (
                  <div key={i} className="col-md-4">
                    <RoadMapItem {...roadMap} />
                  </div>
                ))}
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>

      <img
        src={shapeImg}
        alt="section-shape"
        className="img-fluid section_shape section_shape_top"
      />
      <img
        src={shapeImg}
        alt="section-shape"
        className="img-fluid section_shape section_shape_bottom"
      />
    </RoadMapStyleWrapper>
  );
};

export default RoadMap;
