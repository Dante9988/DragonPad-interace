import TeamMemberStyleWrapper from "./TeamMember.style";

const TeamMember = ({ avatar, name, designation }) => {
  return (
    <TeamMemberStyleWrapper className="team-item">
      <img src={avatar} alt="Team-thumb" />
      <h4 className="team-title mb-8">
        {name}
      </h4>
      <div className="dsc">{designation}</div>
    </TeamMemberStyleWrapper>
  );
};

export default TeamMember;
