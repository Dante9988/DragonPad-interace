import styled from "styled-components";

const StakeHistoryStyleWrapper = styled.div`
  margin: 80px 0 55px;
  .widget_title {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    column-gap: 7px;
    font-size: 22px;
    img {
      height: 15px;
    }
  }

  .schedule_table {
    table {
      width: 100%;
      .table-header {
        background: #1e1f35;
        text-transform: uppercase;
        font-family: "Russo One", sans-serif;

        th {
          background: #1e1f35;
          font-weight: 400;
          padding: 17px 30px;
        }
      }
      td {
        position: relative;
        padding: 17px 30px;
        border-bottom: 1px solid #2e2f3c;
      }

      tr {
        button {
          background: rgba(255, 255, 255, 0.1);
          height: 40px;
          width: 120px;
          padding: 0px;
          font-family: "Russo One";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
          text-align: center;
          text-transform: uppercase;
          color: #ffffff;
        }
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    .schedule_table {
      table {
        .table-header {
          td {
            padding: 17px 15px;
            font-size: 15px;
          }

          th {
            padding: 17px 20px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .schedule_table {
      table {
        display: block;
        overflow-x: auto;
      }
    }
  }
  @media only screen and (max-width: 480px) {
    .widget_title {
      font-size: 22px;
    }
    .schedule_table {
      table {
        td {
          font-size: 14px;
        }
      }
    }
  }
`;

export default StakeHistoryStyleWrapper;
