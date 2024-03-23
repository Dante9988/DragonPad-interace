import styled from "styled-components";

const StakingListStyleWrapper = styled.div`
  padding-bottom: 110px;
  .staking_items_row {
    row-gap: 30px;
  }

  @media (max-width: 991px) {
    padding-bottom: 90px;
  }
`;

export default StakingListStyleWrapper;
