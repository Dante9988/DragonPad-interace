import styled from "styled-components";

const TutorialStyleWrapper = styled.section`
  .section_title_wrapper {
    padding-top: 130px; 
  }
  .participate-item {
    .number-image {
      margin-right: 12px;
      flex: 0 0 21%;
    }

    h4 {
      margin-bottom: 10px;
    }
  }

  @media only screen and (max-width: 991px) {
    .participate-item {
      .number-image {
        flex: 0 0 15%;
      }
    }
  }
`;

export default TutorialStyleWrapper;
