import ProgressBar from "components/progressBar/v2";
import CardHover from "components/cardHover";
import ProjectCardStyleWrapper from "./ProjectCard.style";

const ProjectCard = ({
  thumb,
  title,
  price,
  launchedDate,
  totalRised,
  progress,
  coinIcon,
}) => {
  return (
    <ProjectCardStyleWrapper>
      <div className="previous-item hover-shape-border hover-shape-inner">
        <div className="previous-gaming">
          <div className="previous-image">
            <img src={thumb} alt="Previous item thumb" />
          </div>
          <div className="previous-price">
            <h4 className="mb-10">
              <a href="/projects-details-1">
                {title}
              </a>
            </h4>
            <div className="dsc">PRICE (FSC) = {price} BUSD</div>
          </div>
        </div>
        <div className="previous-chaining">
          <img src={coinIcon} alt="Chain icon" />
          <span>{launchedDate} days ago</span>
        </div>
        <div className="previous-raise">
          <span>
            {totalRised} BUSD ({progress})
          </span>
          <ProgressBar progress={`${progress}`} />
        </div>
        <CardHover />
      </div>
    </ProjectCardStyleWrapper>
  );
};

export default ProjectCard;
