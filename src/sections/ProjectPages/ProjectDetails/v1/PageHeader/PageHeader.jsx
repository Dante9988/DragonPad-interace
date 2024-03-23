import { useModal } from "utils/ModalContext";
import { FiShare2 } from "react-icons/fi";
import titleShape from "assets/images/icons/steps.png";
import PageHeaderStyleWrapper from "./PageHeader.style";

const PageHeader = ({ currentPage }) => {
  const { shareModalHandle } = useModal();
  return (
    <PageHeaderStyleWrapper className="page_header_wrapper">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="breadcrumb_area">
              <div className="breadcrumb_menu">
                <a href="# ">Home <span>.</span> </a>
                <a href="# ">Projects <span>.</span> </a>
                <p>{currentPage && currentPage}</p>
                <img
                  className="heading_shape"
                  src={titleShape}
                  alt="bithu nft heading shape"
                />
              </div>
              <span className="share_icon" onClick={(e) => shareModalHandle(e)}>
                <FiShare2 /> Share
              </span>
            </div>
          </div>


        </div>
      </div>
    </PageHeaderStyleWrapper>
  );
};

export default PageHeader;
