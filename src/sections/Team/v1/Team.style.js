import styled from "styled-components";
import teamBg from "assets/images/bg/team-bg.jpg";

const TeamStyleWrapper = styled.section`
  background-color: #090a1a;
  background: url(${teamBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 115px 0 85px;

  .section_title {
    text-align: center;
    margin-bottom: 55px;
  }
`;

export default TeamStyleWrapper;
