import Button from "components/button";
import CardHover from "components/cardHover";
import CTAStyleWrapper from "./CTA.style";

const CTA = () => {
  return (
    <CTAStyleWrapper>
      <div className="container">
        <div className="cta-area text-center">
          <h2 className="title">
            GET ALERTS 💌 FOR
            NEW IGOS & IDOS
          </h2>
          <div className="dsc">
            Sign up for newsletter to get more IGO/IDO News and Updates
          </div>

          <div className="cta_form_box">
            <input type="email" placeholder="Email Address" />
            <Button variant="mint" md>
              Subscribe
            </Button>
          </div>

          <CardHover />
        </div>
      </div>
    </CTAStyleWrapper>
  );
};

export default CTA;
