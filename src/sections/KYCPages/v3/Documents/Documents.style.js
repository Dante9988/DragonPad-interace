import styled from "styled-components";

const DocumentsStyleWrapper = styled.div`
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

  .kyc_documents_sect {
    max-width: 300px;
    width: 100%;
  }

  .kyc_documents_list {
    background: rgba(30, 31, 53, 0.8);
    padding: 16px 30px !important;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        img {
          margin-right: 14px;
        }
      }
    }

    li + li {
      margin-top: 17px;
    }
  }

  @media only screen and (max-width: 767px) {
    margin-top: 50px;
    justify-content: center;

    h2 {
      text-align: center;
    }
  }
`;

export default DocumentsStyleWrapper;
