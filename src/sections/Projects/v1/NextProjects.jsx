import { BiCalendar } from "react-icons/bi";
import { SectionTitle, SectionTitleWrapper } from "components/sectionTitle";
import Button from "components/button";
import ProjectCard from "./ProjectCard/ProjectCard";
import NextProjectsStyleWrapper from "./NextProjects.style";
import data from "assets/data/projects/upcommingProjects";

const NextProjects = () => {
  return (
    <NextProjectsStyleWrapper>
      <div className="container">
        <SectionTitleWrapper>
          <SectionTitle title="Upcoming IGO" subtitle="Next Projects" />

          <Button href="#" variant="outline" sm>
            {" "}
            <BiCalendar />
            Calendar{" "}
          </Button>
        </SectionTitleWrapper>
        <div className="row align-items-center single-project-row">
          {data?.map((project, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </NextProjectsStyleWrapper>
  );
};

export default NextProjects;
