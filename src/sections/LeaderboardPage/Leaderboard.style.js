import styled from "styled-components";

const LeaderboardStyleWrapper = styled.div`
  padding: 120px 0 100px;
  background: #090a1a;

  .leaderboard_list {
    display: block;
  }

  .leaderboard_list_item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 20px !important;
    background: rgba(30, 31, 53, 0.8);
    backdrop-filter: blur(5px);

    li {
      position: relative;
      width: 20.2%;
      color: #ffffff;
      &:nth-child(1) {
        width: 15%;
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

  .leaderboard_list_item + .leaderboard_list_item {
    margin-top: 10px !important;
  }

  @media only screen and (max-width: 991px) {
    padding-top: 100px;
    .leaderboard_list {
      display: flex;
      flex-wrap: wrap;
      column-gap: 10px;
      row-gap: 10px;
    }

    .leaderboard_list_item {
      width: calc(50% - 10px);
      flex-direction: column;
      align-items: flex-end;
      row-gap: 10px;
      margin: 0 !important;

      li {
        width: 100% !important;
        text-align: right;
        &::before {
          top: 0;
          font-size: 14px;
          display: block;
        }
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .leaderboard_list_item {
      width: 100%;
    }
  }
  @media only screen and (max-width: 320px) {
    .leaderboard_list_item {
      li {
        font-size: 11px;
      }
    }
  }
`;

export default LeaderboardStyleWrapper;
