import { SectionTitle } from "components/sectionTitle";
import SocialStyleWrapper from "./SocialProfile.style";
import data from "assets/data/social/dataV1";

const Social = () => {
  return (
    <SocialStyleWrapper>
      <div className="container">
        <SectionTitle isCenter={true} subtitle="FIND US ON SOCIAL" />
        <div className="social-link-list">
          {data?.map((profile, i) => (
            <a key={i} href={profile.url}>
              {" "}
              <img src={profile.icon} alt="social icon" />{" "}
            </a>
          ))}
        </div>
      </div>
    </SocialStyleWrapper>
  );
};

export default Social;
