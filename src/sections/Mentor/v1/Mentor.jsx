import { SectionTitle } from "components/sectionTitle";
import TeamMember from "../TeamMemberCard";
import TeamStyleWrapper from "./Mentor.style";
import data from "assets/data/team/dataV1";

const Mentor = () => {
  return (
    <TeamStyleWrapper>
      <SectionTitle
        isCenter={true}
        title="OUR MENTORS"
        subtitle="ADVISORS "
      />
      <div className="container">
        <div className="row">
          {data?.map((member, i) => i < 4 && (
            <div key={i} className="col-lg-3 col-md-6">
              <TeamMember {...member} />
            </div>
          ))}
        </div>
      </div>
    </TeamStyleWrapper>
  );
};

export default Mentor;
