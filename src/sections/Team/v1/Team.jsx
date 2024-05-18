import { SectionTitle } from "components/sectionTitle";
import TeamMember from "../TeamMemberCard";
import TeamStyleWrapper from "./Team.style";
import data from "assets/data/team/dataV1";
import Button from "components/button";

const Team = () => {
  return (
    <TeamStyleWrapper>
      <SectionTitle
        isCenter={true}
        title="MEET THE CREW"
        subtitle="TEAM MEMBERS"
      />
      <div className="container">
        <div className="row">
          {data?.map((member, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <TeamMember {...member} />
            </div>
          ))}
        </div>
      </div>
      <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdd8DezhCjlP8yhCz-9RI-AKYKMDxHxGoWSPuh1FUAJkexafQ/viewform?usp=sf_link" variant="mint" md isCenter style={{ borderRadius: '20px' }} className="banner-btn">
        Submit For IDO
      </Button>
    </TeamStyleWrapper>
  );
};

export default Team;
