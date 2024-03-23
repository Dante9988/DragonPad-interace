import styled from "styled-components";

const TeamMemberStyleWrapper = styled.article`
  position: relative;
  background: rgba(26, 27, 47, 0.85);
  backdrop-filter: blur(5px);
  margin-bottom: 30px;
  padding: 35px 0 30px 0;
  text-align: center;
  transition: 1.4s;

  &.team-item {
    img {
      margin-bottom: 45px;
    }
    .dsc {
      margin-bottom: 15px;
    }
  }
  .team-title {
    margin-bottom: 8px;
    a {
      color: #ffffff;
      transition: 0.4s;
    }
  }

  .team-icon-list {
    li {
      display: inline-block;
      padding: 0 7px;
      a {
        color: rgba(255, 255, 255, 0.5);
        transition: 0.4s;
        svg {
          font-size: 20px;
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

  @media only screen and (max-width: 991px) {
    &.team-item {
      img {
        margin-bottom: 30px;
      }
    }
  }
  @media only screen and (max-width: 480px) {
    &.team-item {
      margin-bottom: 20px;
    }
  }
`;

export default TeamMemberStyleWrapper;
