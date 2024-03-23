import PageHeaderStyleWrapper from "./PageHeader.style";
const PageHeader = ({ pageTitle }) => {
  return (
    <PageHeaderStyleWrapper>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="breadcrumb_area text-center">
              <h2 className="breadcrumb_title text-uppercase">{pageTitle && pageTitle}</h2>
            </div>
          </div>
        </div>
      </div>
    </PageHeaderStyleWrapper>
  );
};

export default PageHeader;
