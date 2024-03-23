import { SectionTitle } from "components/sectionTitle";
import TeamMember from "../TeamMemberCard";
import TeamStyleWrapper from "./Team.style";
import data from "assets/data/team/dataV1";

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
    </TeamStyleWrapper>
  );
};

export default Team;
