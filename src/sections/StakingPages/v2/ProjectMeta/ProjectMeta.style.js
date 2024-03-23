import styled from "styled-components";

const ProjectMetaStyleWrapper = styled.div`
  .project_meta_item {
    background: #1a1b30;
    padding: 45px 50px 45px;
    margin-bottom: 30px;

    h4 {
      font-size: 22px;
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 0;
    }
  }

  .project_meta_item + .project_meta_item {
    margin-top: 30px;
  }

  .project_meta_btns {
    margin-top: 30px;

    .btn_wrapper {
      width: 100%;
    }
    .btn_wrapper + .btn_wrapper {
      margin-top: 15px;
    }
  }

  @media only screen and (max-width: 1199px) {
    .project_meta_item {
      padding: 35px 25px;
    }
  }
`;

export default ProjectMetaStyleWrapper;
