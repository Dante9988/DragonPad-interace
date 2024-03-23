import styled from "styled-components";
import linkBgShape from "assets/images/icons/icon-image.png";

const SocialStyleWrapper = styled.section`
  margin-bottom: 100px;
  .section_title {
    text-align: center;
    margin-bottom: 50px;
    .subtitle {
      color: #ffffff;
    }
  }
  .social-link-list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 30px;
    row-gap: 20px;

    a {
      color: #ffffff;
      background: url(${linkBgShape});
      width: 60px;
      height: 60px;
      line-height: 60px;
      transition: 0.4s;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        transition: all 0.3s ease-in-out;
      }

      &:hover {
        img {
          opacity: 0.6;
        }
      }
    }
  }
  @media only screen and (max-width: 991px) {
    margin-bottom: 70px;
  }
  @media only screen and (max-width: 575px) {
    margin-bottom: 50px;
  }
`;

export default SocialStyleWrapper;
