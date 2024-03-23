import CardHoverWrapper from "./CardHover.style";

const CardHover = () => {
  return (
    <CardHoverWrapper className="card-hover-wrapper">
      <span className="hover-shape hover-shape-left  hover-shape-1"></span>
      <span className="hover-shape hover-shape-left hover-shape-2"></span>
      <span className="hover-shape hover-shape-right hover-shape-3"></span>
      <span className="hover-shape hover-shape-right hover-shape-4"></span>
    </CardHoverWrapper>
  );
};

export default CardHover;
