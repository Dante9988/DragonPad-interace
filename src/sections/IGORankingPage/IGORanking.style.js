import styled from "styled-components";

const IGORankingStyleWrapper = styled.div`
  padding: 120px 0 100px;
  background: #090a1a;

  .ranking_list {
    display: block;
  }

  .ranking_list_item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
    row-gap: 10px;
    padding: 25px 20px !important;
    background: rgba(30, 31, 53, 0.8);
    backdrop-filter: blur(5px);

    li {
      position: relative;
      display: flex;
      align-items: center;
      width: 10%;
      height: 35px;
      color: #ffffff;
      &:nth-child(2) {
        width: 22%;
      }

      img {
        margin-right: 10px;
      }

      &::before {
        display: none;
        position: absolute;
        left: 0;
        top: -75px;
        content: attr(data-title);
        font-family: "Russo One", sans-serif;
        color: rgba(255, 255, 255, 0.7);
        font-weight: 400;
        text-transform: uppercase;
      }
    }

    &:nth-child(1) {
      li {
        &::before {
          display: block;
        }
      }
    }
  }

  .ranking_list_item + .ranking_list_item {
    margin-top: 10px !important;
  }

  @media only screen and (max-width: 991px) {
    padding-top: 100px;
    .ranking_list {
      display: flex;
      flex-wrap: wrap;
      column-gap: 10px;
      row-gap: 10px;
    }

    .ranking_list_item {
      width: calc(50% - 10px);
      flex-direction: column;
      align-items: flex-end;
      row-gap: 10px;
      margin: 0 !important;

      li {
        width: 100% !important;
        text-align: right;
        justify-content: flex-end;
        &::before {
          top: auto;
          font-size: 14px;
          display: block;
        }
      }
    }

    .ranking_list_item + .ranking_list_item {
      margin-top: 0 !important;
    }
  }

  @media only screen and (max-width: 767px) {
    .ranking_list_item {
      width: 100%;
    }
  }
  @media only screen and (max-width: 320px) {
    .ranking_list_item {
      li {
        font-size: 11px;
      }
    }
  }
`;

export default IGORankingStyleWrapper;
