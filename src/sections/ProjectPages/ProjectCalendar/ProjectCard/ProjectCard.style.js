import styled, { keyframes } from "styled-components";
import bgShape from "assets/images/bg/shape-bg.png";
import { fadeIn } from "react-animations";
const modalAnimation = keyframes`${fadeIn}`;
const ProjectCardStyleWrapper = styled.div`
  padding: 30px 35px;
  transition: all 0.4s;
  position: relative;
  z-index: 1;
  height: 460px;
  width: 360px;
  background-image: radial-gradient(
    circle,
    rgba(86, 75, 135, 0.85) 0%,
    #1e1f35 100%
  );
  animation: 1s ${modalAnimation};

  .close_btn {
    position: absolute;
    right: 10px;
    top: 10px;
    height: 20px;
    width: 20px;
    cursor: pointer;

    &:hover {
      color: #ffffff;
    }
  }

  .card-hover-wrapper {
    opacity: 1;
    visibility: visible;
  }

  .project-info {
    margin-bottom: 28px;
    column-gap: 20px;
    a {
      color: #ffffff;
    }

    .project-auother {
      h4 {
        margin-bottom: 10px;
        text-transform: uppercase;
      }
    }

    .dsc {
      font-size: 14px;
    }
  }

  .project-content {
    .project-header {
      position: relative;
      height: 35px;
      display: flex;
      align-items: center;
      margin-bottom: 40px;

      &::before {
        position: absolute;
        width: 197px;
        height: 35px;
        background: url(${bgShape});
        background-position: center;
        background-repeat: no-repeat;
        left: -35px;
        top: 0px;
        content: "";
        /* z-index: 111; */
      }
    }
    .heading-title {
      h4 {
        font-size: 16px;
        margin-bottom: 0;
        position: relative;
      }
    }
  }

  .project-listing {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    li {
      display: flex;
      justify-content: space-between;
      span {
        color: #fff;
      }
    }
  }

  .social-share {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;

    .social-links {
      display: flex;
      justify-content: space-between;
      align-items: center;
      column-gap: 15px;
      a {
        color: #b5b5ba;
        svg {
          font-size: 17px;
        }

        &:hover {
          color: #ffffff;
        }
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    padding-left: 20px;
    padding-right: 20px;

    .project-info {
      .project-auother {
        h4 {
          font-size: 20px;
        }
      }
    }

    .project-content {
      .project-header {
        &::before {
          left: -20px;
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    height: 90%;
    width: 100%;
    padding: 15px 20px;
    .project-info {
      margin-bottom: 18px;

      img {
        height: 50px;
        width: 50px;
      }

      .project-auother {
        h4 {
          font-size: 14px;
        }
      }

      .dsc {
        font-size: 11px;
      }
    }

    .project-content {
      .project-header {
        margin-bottom: 25px;

        &::before {
          left: -20px;
          width: 183px;
          height: 33px;
          background-size: contain;
        }
      }

      .heading-title {
        h4 {
          font-size: 14px;
        }
      }
    }

    .project-listing {
      li {
        font-size: 12px;
      }
    }

    .close_btn {
      right: 0;
      top: 0;
    }

    .social-share {
      .social-links {
        a svg {
          font-size: 14px;
        }
      }
    }
  }
`;

export default ProjectCardStyleWrapper;
