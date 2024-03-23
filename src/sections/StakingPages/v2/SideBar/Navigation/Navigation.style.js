import styled from "styled-components";

const NavigationStyleWrapper = styled.div`
  .navigation_links {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    a {
      display: inline-block;
      font-family: "Russo One";
      font-size: 16px;
      color: rgba(255, 255, 255, 0.7);

      img {
        margin-left: 8px;
        visibility: hidden;
        opacity: 0;
        transition: all 0.4s;
      }

      &:hover,
      &.active {
        color: #a3ff12;
        img {
          visibility: visible;
          opacity: 1;
        }
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .navigation_links {
      a {
        font-size: 14px;
        img {
          width: 34px;
          margin-left: 5px;
        }
      }
    }
  }
`;

export default NavigationStyleWrapper;
