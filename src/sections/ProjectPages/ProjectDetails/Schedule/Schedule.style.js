import styled from "styled-components";
const ScheduleStyleWrapper = styled.div`
  margin-bottom: 55px;
  .widget_title {
    margin-bottom: 15px;
    font-size: 22px;
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

  @media only screen and (max-width: 480px) {
    .schedule_table {
      table {
        display: block;
        overflow-x: auto;

        td {
          font-size: 14px;
        }
      }
    }
  }
`;

export default ScheduleStyleWrapper;
