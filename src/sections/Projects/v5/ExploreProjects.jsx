import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { SectionTitle } from "components/sectionTitle";
import Button from "components/button";
import ProjectCard from "./ProjectCard/ProjectCard";
import ExploreProjectsStyleWrapper from "./ExploreProjects.style";
import projectsData from "assets/data/projects/dataV4";

const ExploreProjects = () => {
  const { data } = projectsData
  return (
    <ExploreProjectsStyleWrapper>
      <div className="container">
        <SectionTitle title="PREVIOUS IGO" subtitle="COMPLETE PROJECTS" />
        <div className="row">
          <ul className="menu-list">
            <li>Project name</li>
            <li>Chain</li>
            <li>Launched</li>
            <li>Total Raise</li>
            <li>Progress</li>
          </ul>
        </div>
        <div className="projects-row">
          <Tabs>
            <TabList>
              {data?.map((project, i) => (
                <Tab key={i}>

                  <Button variant="outline" sm onClick={(e) => e.preventDefault()}>
                    {project.projectName}
                  </Button>
                </Tab>
              ))} 
            </TabList>

            {data?.map((item, i) => (
              <TabPanel key={i} className="row tabs-row">
                {item.projects?.map((project, i) => (
                  <div key={i} className="col-md-12">
                    <ProjectCard {...project} />
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
