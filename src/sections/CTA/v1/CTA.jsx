import Button from "components/button";
import CardHover from "components/cardHover";
import CTAStyleWrapper from "./CTA.style";

const CTA = () => {
  return (
    <CTAStyleWrapper>
      <div className="container">
        <div className="cta-area text-center">
          <h2 className="title">
            Vote for the next IDO
          </h2>
          <div className="dsc">
            If you want to get in early into Web 3.0 Projects, this is the place to be!
          </div>
          <Button variant="mint" md href="#">
            Join Revolution
          </Button>
          <CardHover />
        </div>
      </div>
    </CTAStyleWrapper>
  );
};

export default CTA;
