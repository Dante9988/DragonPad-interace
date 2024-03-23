import styled from "styled-components";

const StakeWalletStyleWrapper = styled.div`
  .project_meta_item {
    background: #1a1b30;
    margin-bottom: 30px;

    h3 {
      font-size: 30px;
      margin-bottom: 26px;
    }
    p {
      margin-bottom: 0;
    }
  }

  .meta_content,
  .meta_header {
    padding: 45px 50px 45px;
  }

  .meta_header {
    border-bottom: 1px solid #3c3d4f;

    &.balance {
      padding: 0;
      border: none;
    }
  }

  .project_meta_item + .project_meta_item {
    margin-top: 30px;
  }

  .project_meta_btns {
    margin-top: 30px;

    .btn_wrapper {
      width: 100%;
    }
    .btn_wrapper + .btn_wrapper {
      margin-top: 15px;
    }
  }

  @media only screen and (max-width: 991px) {
    margin-top: 30px;

    .meta_content,
    .meta_header {
      padding: 35px 25px;
    }
  }
`;

export default StakeWalletStyleWrapper;
