import styled, { keyframes } from "styled-components";
const pulseAnimation = keyframes`

from { 
        transform: scale(1);
    }

    to { 
        transform: scale(1.5);
        opacity: 0;
    }
`;

const ProjectClassicStyleWrapper = styled.section`
  height: auto;
  background: #090a1a;
  position: relative;
  padding: 80px 0 0;

  .previous_projects {
    .section_title {
      margin-bottom: 50px;
    }
  }

  .section_heading {
    position: relative;
    display: flex;
    align-items: center;
    max-width: 333px;
    width: 100%;
    margin-bottom: 50px;
    z-index: 1;
    .title {
      font-size: 36px;
      margin: 0;
    }
  }

  .pulse_icon {
    position: absolute;
    width: 32px;
    right: 0px;
    top: auto;
    .circle_outer {
      border: 1px solid #e50040;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin: 0 auto 5px;
      position: relative;
      opacity: 0.8;
      animation: ${pulseAnimation} 2s ease-in-out infinite;
    }
    .circle_inner {
      background: #e50040;
      left: 7px;
      top: 7px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      position: absolute;
      opacity: 0.8;

      &::after {
        content: "";
        display: block;
        border: 2px solid #e50040;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        top: -3.2px;
        left: -3.2px;
        position: absolute;
        opacity: 0.8;
        animation: ${pulseAnimation} 2s ease-in-out 0.2s infinite;
      }
    }
  }

  @media only screen and (max-width: 575px) {
    .section_heading {
      .title {
        font-size: 30px;
      }
    }
  }
`;

export default ProjectClassicStyleWrapper;
