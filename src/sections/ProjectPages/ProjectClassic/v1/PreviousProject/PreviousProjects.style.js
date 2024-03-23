import styled from "styled-components";

const ProjectCardStyleWrapper = styled.div`
  background: #090b1a;
  padding: 80px 0 120px;
  .menu-list {
    font-family: "Russo One", sans-serif;
    padding-left: 40px !important;
    margin-bottom: 15px !important;

    li {
      display: inline-block;
      color: rgba(255, 255, 255, 0.7);
      text-transform: uppercase;
      transition: 0.4s;

      &:nth-child(1) {
        width: 35%;
      }
      &:nth-child(2) {
        width: 10.5%;
      }
      &:nth-child(3) {
        width: 17.8%;
      }
      &:nth-child(4) {
        width: 17.4%;
      }
    }
  }

  .projects-row {
    row-gap: 30px;
  }

  @media only screen and (max-width: 991px) {
    padding-bottom: 85px;
    .menu-list {
      li {
        font-size: 14px;
        &:nth-child(1) {
          width: 33%;
        }
      }
    }
  }
  @media only screen and (max-width: 767px) {
    .menu-list {
      padding-left: 10px !important;
      margin-bottom: 30px !important;
      li {
        width: 100% !important;
      }
      li + li {
        margin-top: 15px;
      }
    }
  }
`;

export default ProjectCardStyleWrapper;
