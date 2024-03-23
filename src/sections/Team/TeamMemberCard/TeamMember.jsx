import CardHover from "components/cardHover";
import TeamMemberStyleWrapper from "./TeamMember.style";

const TeamMember = ({ avatar, name, designation, socialLinks }) => {
  return (
    <TeamMemberStyleWrapper className="team-item">
      <img src={avatar} alt="Team-thumb" />
      <h4 className="team-title mb-8">
        <a href="/team-details">{name}</a>
      </h4>
      <div className="dsc">{designation}</div>
      <ul className="team-icon-list">
        {socialLinks?.map((item, i) => (
          <li key={i}>
            <a href={item.url}>{item.icon}</a>
          </li>
        ))}
      </ul>

      <CardHover />
    </TeamMemberStyleWrapper>
  );
};

export default TeamMember;
