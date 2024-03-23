import styled from "styled-components";

const QRCodeStyleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  h2 {
    font-size: 22px;
    line-height: 40px !important;
    text-transform: uppercase;
    color: #ffffff;
    margin-bottom: 18px;
  }

  .kyc_qrcode_content {
    max-width: 300px;
    width: 100%;
  }

  .kyc_qrcode_thumb {
    height: 300px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    border: 2px solid rgba(255, 255, 255, 0.15);
    box-sizing: border-box;
  }

  @media only screen and (max-width: 767px) {
    margin-top: 50px;
    justify-content: center;

    h2 {
      text-align: center;
    }
  }
`;

export default QRCodeStyleWrapper;
