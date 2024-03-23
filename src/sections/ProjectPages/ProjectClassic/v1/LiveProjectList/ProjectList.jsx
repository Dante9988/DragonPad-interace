import ProjectCard from "./ProjectCard/ProjectCard";
import ProjectListStyleWrapper from "./ProjectList.style";
import data from "assets/data/projects/dataV5";

const ProjectList = () => {
  return (
    <ProjectListStyleWrapper>
      <div className="row projects_row">
        {data?.map((project, i) => (
          <div key={i} className="col-md-12">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </ProjectListStyleWrapper>
  );
};

export default ProjectList;
