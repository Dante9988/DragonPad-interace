import styled from "styled-components";
import bannerBG from "assets/images/bg/banner-bg.jpg";

const BannerStyleWrapper = styled.section`
  position: relative;
  overflow: hidden;
  padding: 170px 0 225px;
  background: url(${bannerBG});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 9;

  .banner-content {
    max-width: 700px;
    margin: 0 auto;

    .banner-icon {
      margin: 0 0 24px;
    }

    .banner-title {
      font-family: 'VT323', monospace; /* VT323 font with a monospace fallback */
      color: #ffffff;
      text-shadow: 
        0px 0px 6px rgba(255, 215, 0, 0.8), /* Soft glow effect */
        1px 1px 2px black, /* Soft shadow effect */
        2px 2px 2px black; /* Another layer of shadow for depth */
      font-size: 5em; /* Adjust the size as needed */
    }

    .description {
      font-family: 'VT323', monospace; /* VT323 font with a monospace fallback */
      color: #ffffff;
      font-size: 3em;
      text-shadow:
        0px 0px 6px rgba(255, 215, 0, 0.5), /* Soft glow effect */
        1px 1px 2px black; /* Soft shadow effect */
    }
  }
    
  }

  .banner-btn {
    margin: 0 auto;
  }

  

  @media only screen and (max-width: 991px) {
    padding: 150px 0 200px;
    .banner-content {
      .banner-title {
        margin: 0 0 20px;
        font-size: 40px;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .banner-content {
      .banner-title {
        font-size: 30px;
      }
    }
  }

  @media only screen and (max-width: 575px) {
    .banner-content {
      .banner-title {
        font-size: 28px;
        margin-bottom: 10px;
      }

      .description {
        font-size: 16px;
        margin: 0 0 30px;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    padding-top: 120px;

    .banner-content {
      .banner-title {
        font-size: 24px;
      }
    }
  }
`;

export default BannerStyleWrapper;



