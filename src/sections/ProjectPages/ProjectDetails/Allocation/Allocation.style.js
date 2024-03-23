import styled from "styled-components";
const AllocationStyleWrapper = styled.div`
  margin-bottom: 55px;
  .widget_title {
    margin-bottom: 15px;
  }

  .allocation_table {
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

        /* &:nth-child(2) {
          padding-left: 45px;
        } */
      }
      td {
        position: relative;
        padding: 17px 30px;
        border-bottom: 1px solid #2e2f3c;
      }

      tr {
        button {
          outline: none;
          height: 40px;
          width: 120px;
          background: rgba(255, 255, 255, 0.1);
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
    .allocation_table {
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

  @media only screen and (max-width: 767px) {
    .allocation_table {
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

export default AllocationStyleWrapper;
