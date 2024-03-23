import CardHover from "components/cardHover";
import ProjectCardStyleWrapper from "./ProjectCard.style";

const ProjectCard = ({
  thumb,
  title,
  price,
  saleEnd,
  coinIcon,
  projectDetails,
  socialLinks,
}) => {
  return (
    <ProjectCardStyleWrapper>
      <div className="project-info d-flex">
        <a href="/projects-details-1">
          <img src={thumb} alt="project thumb" />
        </a>
        <div className="project-auother">
          <h4 className="mb-10">
            <a href="/projects-details-1">{title}</a>
          </h4>
          <div className="dsc">PRICE (GAC) = {price}</div>
        </div>
      </div>
      <div className="project-content">
        <div className="project-header d-flex justify-content-between align-items-center">
          <div className="heading-title">
            <h4>{saleEnd} Days Left</h4>
          </div>
          <div className="project-icon">
            <img src={coinIcon} alt="coin icon" />
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
