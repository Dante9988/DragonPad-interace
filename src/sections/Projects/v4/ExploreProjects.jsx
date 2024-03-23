import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { SectionTitle, SectionTitleWrapper } from "components/sectionTitle";
import Button from "components/button";
import ProjectCard from "./ProjectCard/ProjectCard";
import ExploreProjectsStyleWrapper from "./ExploreProjects.style";
import projectData from "assets/data/projects/upcommingProjectsV2";

const ExploreProjects = () => {
  const { data } = projectData;
  return (
    <ExploreProjectsStyleWrapper>
      <div className="container">
        <SectionTitleWrapper>
          <SectionTitle title="PROJECT POOLS" subtitle="EXPLORE" />
        </SectionTitleWrapper>
        <div className="row align-items-center single-project-row">
          <Tabs>
            <TabList>
              {data?.map((child, i) => (
                <Tab key={i}>
                  <Button
                    variant="outline"
                    sm
                    onClick={(e) => e.preventDefault()}
                  >
                    {child.projectStatus}
                  </Button>
                </Tab>
              ))}
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
    </ExploreProjectsStyleWrapper>
  );
};

export default ExploreProjects;
