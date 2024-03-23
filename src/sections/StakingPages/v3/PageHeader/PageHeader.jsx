import Counter from "components/counter";
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
              <h2 className="breadcrumb_title text-uppercase">{pageTitle && pageTitle}</h2>
            </div>
          </div>

          <div className="col-lg-5 offset-lg-2">
            <div className="stake_counter">
              <h6>
                Total Stake {" "}
                <Counter
                  end={250000.55}
                  decimal="."
                  decimals={250000.55 % 1 !== 0 ? "2" : "0"}
                  suffix=" BUSD"
                />
              </h6>
              <h6>
                My Stake {" "}
                <Counter
                  end={86.01}
                  decimal="."
                  decimals={86.01 % 1 !== 0 ? "2" : "0"}
                  suffix=" BUSD"
                /> </h6>
            </div>
          </div>
        </div>
      </div>
    </PageHeaderStyleWrapper>
  );
};

export default PageHeader;
