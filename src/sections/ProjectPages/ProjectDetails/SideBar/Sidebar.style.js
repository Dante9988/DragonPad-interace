import styled from "styled-components";

const SidebarStyleWrapper = styled.div`
  height: 640px;
  padding: 48px 50px 15px;
  background: linear-gradient(180deg, #1e1f35 0%, rgba(30, 31, 53, 0) 100%);

  @media only screen and (max-width: 1199px) {
    padding: 50px 30px;
  }
  @media only screen and (max-width: 991px) {
    padding: 40px 25px;
  }
  @media only screen and (max-width: 767px) {
    margin-top: 50px;
    height: 470px;
    margin-bottom: 30px;
  }
`;

export default SidebarStyleWrapper;
