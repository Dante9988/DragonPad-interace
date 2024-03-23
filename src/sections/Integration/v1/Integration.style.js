import styled from "styled-components";

const IntegrationStyleWrapper = styled.section`
  background: #090a1a;
  padding-top: 0px;
  padding-bottom: 105px;

  .section_title {
    margin-bottom: 32px;
  }

  .integration_content{
    p{
      margin-bottom: 26px;
    }
  }

  .integration_features {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 9px;
    span {
      display: flex;
      align-items: center;
      column-gap: 15px;
      width: 45%;
      color: #ffffff;

      svg {
        font-size: 15px;
        opacity: 0.6;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .integration_left {
      margin-bottom: 60px;
    }
  }
  @media only screen and (max-width: 480px) {
    .integration_features {
      span {
        font-size: 12px;
        svg {
          font-size: 12px;
        }
      }
    }
  }
`;

export default IntegrationStyleWrapper;
