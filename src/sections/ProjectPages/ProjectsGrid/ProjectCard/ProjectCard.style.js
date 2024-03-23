import bgShape from "assets/images/bg/shape-bg.png";
import styled from "styled-components";

const ProjectCardStyleWrapper = styled.div`
  padding: 30px 30px 10px;
  background: rgba(30, 31, 53, 0.8);
  transition: all 0.4s;
  position: relative;
  z-index: 2;

  &::before {
    position: absolute;
    background: rgba(255, 255, 255, 0.05);
    height: 50px;
    width: 100%;
    left: 0px;
    bottom: 0px;
    content: "";
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
        font-size: 22px;
      }
    }
  }

  .project-content {
    .project-header {
      position: relative;
      margin-bottom: 40px;

      &::before {
        position: absolute;
        width: 197px;
        height: 35px;
        background: url(${bgShape});
        background-position: center;
        background-repeat: no-repeat;
        left: -30px;
        top: 0px;
        content: "";
        z-index: 111;
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
    row-gap: 15px;
    margin-bottom: 50px;
    li {
      display: flex;
      justify-content: space-between;
      span {
        color: #fff;
      }
    }
  }

  .social-links {
    display: flex;
    align-items: center;
    column-gap: 25px;
    padding-bottom: 4px;
    a {
      color: #b5b5ba;
      svg {
        font-size: 17px;
      }
      img {
        opacity: 0.6;
        height: 17px;
        transition: all 0.3s;
      }

      &:hover {
        color: #ffffff;
        img {
          opacity: 0.8;
        }
      }
    }
  }

  &:hover {
    background-image: radial-gradient(
      circle,
      rgba(137, 120, 211, 0.4) 0%,
      #1e1f35 100%
    );

    .card-hover-wrapper {
      opacity: 1;
      visibility: visible;
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
    .project-info {
      flex-direction: column;
      row-gap: 20px;
    }
  }
`;

export default ProjectCardStyleWrapper;
