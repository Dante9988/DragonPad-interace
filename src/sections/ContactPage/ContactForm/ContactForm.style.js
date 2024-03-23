import styled from "styled-components";

const ContactFormStyleWrapper = styled.div`
  h3 {
    font-size: 22px;
    line-height: 45px !important;
    margin-bottom: 20px;
    text-transform: uppercase;
    color: #ffffff;
  }

  p {
    line-height: 45px !important;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 18px;
  }

  .btn_wrapper {
    width: 100%;
    height: 60px;
  }

  .contact_user_form {
    input,
    textarea {
      height: 60px;
      width: 100%;
      padding: 8px 21px;
      border: 2px solid rgba(255, 255, 255, 0.15);
      box-sizing: border-box;
      background: Transparent;
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 45px !important;
      color: rgba(255, 255, 255, 0.5);
      margin-bottom: 23px;
      border-radius: 0;

      &:focus {
        outline: 0 !important;
        box-shadow: none;
      }
    }

    textarea {
      resize: none;
      height: 130px;
    }

    label {
      font-family: "Russo One";
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 45px !important;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.7);
    }
  }

  @media (max-width: 991px) {
  }
  @media only screen and (max-width: 575px) {
    h3 {
      font-size: 19px;
    }
    p {
      font-size: 14px;
      line-height: 24px !important;
    }
  }
`;

export default ContactFormStyleWrapper;
