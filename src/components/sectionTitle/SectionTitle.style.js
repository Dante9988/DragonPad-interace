import styled from "styled-components";

export const SectionTitleStyle = styled.div`
  position: relative;
  z-index: 1;
  span {
    display: inline-block;
    color: #a3ff12;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    font-family: "Russo One", sans-serif;
    margin-bottom: 15px;
    img {
      margin-left: 10px;
      margin-right: 10px;
      margin-top: -1px;
    }

    .shape_left {
      margin-right: 9px;
    }
  }

  h2 {
    color: #ffffff;
    text-transform: uppercase;
    margin-bottom: 0;
    font-size: 36px;
  }

  @media only screen and (max-width: 991px) {
    h2 {
      font-size: 30px;
    }
  }
  @media only screen and (max-width: 776px) {
    h2 {
      font-size: 26px;
    }
    img {
      max-width: 60px;
    }
  }
  @media only screen and (max-width: 480px) {
    h2 {
      font-size: 22px;
    }
  }
  @media only screen and (max-width: 375px) {
    span {
      font-size: 13px;
    }
  }
  @media only screen and (max-width: 320px) {
    span {
      img {
        max-width: 40px;
      }
    }
  }
`;

export const SectionTitleWrapperStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  @media only screen and (max-width: 776px) {
    flex-direction: column;
    align-items: baseline;
  }
`;
