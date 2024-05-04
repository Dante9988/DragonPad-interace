import styled from "styled-components";

const TutorialStyleWrapper = styled.section`
  padding: 3em 0;

  .section_title_wrapper {
    text-align: center;
    margin-bottom: 2em;
  }

  .participate-item {
    background: #1e1f35;
    border: 2px solid #4a4176;
    box-shadow: 0px 0px 10px 0px #4a4176;
    border-radius: 15px;
    padding: 1.5em;
    margin-bottom: 1em;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: translateY(-10px);
    }

    .number-image {
      margin-right: 12px;
      flex: 0 0 60px; // fixed size for the icons
    }

    h4 {
      color: #ff6f3d; // Dragon-themed color
      font-family: 'VT323', monospace; // Pixel font for a more thematic style
      font-size: 1.5em;
      margin-bottom: 1em;
    }

    .description {
      color: rgba(255, 255, 255, 0.7);
      font-family: 'VT323', monospace; // Consistent font for all texts
      font-size: 1em;
      line-height: 1.4;
    }
  }
`;


export default TutorialStyleWrapper;
