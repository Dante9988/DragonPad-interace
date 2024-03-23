import styled from "styled-components";

const ApplyFormStyleWrapper = styled.div`
  input[type="text"],
  input[type="email"],
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
    line-height: 45px;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 0;
    border-radius: 0;

    &:focus {
      outline: 0 !important;
      background: transparent;
      box-shadow: none;
      border-color: rgba(255, 255, 255, 0.15);
    }
  }

  label,
  h5 {
    font-family: "Russo One", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 45px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.7);
  }

  label {
    cursor: pointer;
  }

  h5 {
    line-height: 1.35;
    margin-bottom: 20px;
  }

  textarea {
    resize: none;
    height: 130px;
  }

  .form_widgets {
    margin-top: 35px;

    .form-group {
      margin-bottom: 20px;

      label {
        cursor: unset;
      }
    }
  }

  .form_check {
    input[type="radio"] {
      appearance: none;
      background-color: transparent;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      position: relative;
      cursor: pointer;
      transition: background-color 0.25s linear;

      &::before {
        position: absolute;
        left: 50%;
        top: 50%;
        height: 20px;
        width: 20px;
        border: 2px solid #3a3b48;
        border-radius: 50%;
        content: "";
        transform: translate(-50%, -50%);
        transition: border 0.25s linear;
      }
    }

    input[type="radio"]:checked {
      background-color: #a3ff12;

      &::before {
        border-color: #568416;
      }
    }

    label {
      font-family: "Inter", sans-serif;
      font-size: 16px;
      font-weight: 500;
      text-transform: capitalize;
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      justify-content: flex-end;
      column-gap: 25px;
    }
  }

  .input_with_icon {
    display: flex;
    align-items: center;

    .input_social_icon {
      width: 60px;
      border: 2px solid rgba(255, 255, 255, 0.15);
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 0;

      svg {
        font-size: 18px;
      }
    }
  }

  .btn_wrapper{
    width: 100%;
  }
`;

export default ApplyFormStyleWrapper;
