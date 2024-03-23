import styled from "styled-components";

const CardStyleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(30, 31, 53, 0.8);
  padding: 45px 50px 52px;

  .project-value {
    h3 {
      font-size: 30px;
      margin-bottom: 18px;
    }
    h6 {
      color: rgba(255, 255, 255, 0.7);
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 0px;
    }
  }

  .btn_wrapper {
    width: 155px;
    height: 60px;
    background: rgba(255, 255, 255, 0.2);
  }

  @media only screen and (max-width: 375px) {
    flex-direction: column;
    row-gap: 15px;
    text-align: center;

    .btn_wrapper {
      height: 50px;
    }
  }
`;

export default CardStyleWrapper;
