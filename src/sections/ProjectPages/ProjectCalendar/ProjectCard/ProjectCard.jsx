import { FiX } from "react-icons/fi";
import CardHover from "components/cardHover";
import ProjectCardStyleWrapper from "./ProjectCard.style";

const ProjectCard = ({
  thumb,
  title,
  price,
  saleEnd,
  projectDetails,
  socialLinks,
  modalHandle,
}) => {
  return (
    <ProjectCardStyleWrapper>
      <div className="close_btn" onClick={() => modalHandle()}>
        <FiX />
      </div>
      <div className="project-info d-flex">
        <img src={thumb} alt="project thumb" />
        <div className="project-auother">
          <h4 className="mb-10">
            <a href="/projects-details-1">{title}</a>
          </h4>
          <div className="dsc">PRICE (GAC) = {price}</div>
        </div>
      </div>
      <div className="project-content">
        <div className="project-header">
          <div className="heading-title">
            <h4>{saleEnd} Days Left</h4>
          </div>
        </div>
        <ul className="project-listing">
          {projectDetails?.map((item, i) => (
            <li key={i}>
              {item.title} <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <div className="social-share">
          <span>Social</span>

          <div className="social-links">
            {socialLinks?.map((profile, i) => (
              <a key={i} href={profile.url}>{profile.icon}</a>
            ))}
          </div>
        </div>
      </div>

      <CardHover />
    </ProjectCardStyleWrapper>
  );
};

export default ProjectCard;
