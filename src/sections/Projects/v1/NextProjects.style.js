import styled from "styled-components";
import sectionBg from "assets/images/bg/project-bg.jpg";
const NextProjectsStyleWrapper = styled.div`
  background: url(${sectionBg});
  padding-top: 115px;
  padding-bottom: 105px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  .single-project-row {
    row-gap: 30px;
  }

  @media only screen and (max-width: 991px) {
    padding: 75px 0; 
  }
`;

export default NextProjectsStyleWrapper;
