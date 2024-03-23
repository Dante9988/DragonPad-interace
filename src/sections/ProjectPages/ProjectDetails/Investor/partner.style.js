import styled from "styled-components";

const PartnerStyleWrapper = styled.div`
  margin-bottom: 55px;
  .widget_title {
    margin-bottom: 15px;
    font-size: 22px;
  }

  .partner_logo_list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    row-gap: 55px;
    column-gap: 20px;

    .partner_logo {
      width: 23%;
    }
  }

  @media only screen and (max-width: 991px) {
    .partner_logo_list {
      row-gap: 30px;
    }
  }
  @media only screen and (max-width: 767px) {
    .partner_logo_list {
      .partner_logo {
        width: 18%;
      }
    }
  }
`;

export default PartnerStyleWrapper;
