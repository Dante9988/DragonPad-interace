import Button from "components/button";
import titleShape from "assets/images/icons/steps.png";
import PageHeaderStyleWrapper from "./PageHeader.style";

const PageHeader = ({ currentPage, pageTitle }) => {
  return (
    <PageHeaderStyleWrapper>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="breadcrumb_area">
              <div className="breadcrumb_menu">
                <>
                  <a href="# ">Home</a> <span>.</span> {currentPage && currentPage}
                </>
                <img
                  className="heading_shape"
                  src={titleShape}
                  alt="bithu nft heading shape"
                />
              </div>
              <h2 className="breadcrumb_title text-uppercase">
                {pageTitle && pageTitle}
              </h2>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="breadcrumb_form">
              <Button sm variant="dark" href="# ">
                Help Center
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageHeaderStyleWrapper>
  );
};

export default PageHeader;
