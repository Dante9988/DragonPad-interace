import styled from "styled-components";

const FeaturesStyleWrapper = styled.section`
  background: rgba(30, 31, 53, 0.7);
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 2;
  padding-top: 115px;
  padding-bottom: 105px;
  
  .key_points_conttent {
    margin-top: 50px;
    z-index: 1;
  }
  .key_points_item {
    &_img {
      img {
        min-height: 50px;
      }
      margin-bottom: 26px;
    }

    &_text {
      h4 {
        font-size: 22px;
        line-height: 27px;
        margin-bottom: 21px;
        color: #ffffff;
        text-transform: capitalize;
      }
      p {
        max-width: 91%;
        margin-bottom: 26px;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .items-row {
      row-gap: 15px;
    }
  }
  @media only screen and (max-width: 767px) {
    padding: 100px 0;
    .key_points_item {
      &_text {
        h4 {
          font-size: 20px;
        }
        p {
          font-size: 15px;
        }
      }
    }
  }
`;

export default FeaturesStyleWrapper;
