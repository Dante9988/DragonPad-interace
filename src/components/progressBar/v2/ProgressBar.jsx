import ProgressBarStyle from "./ProgressBar.style";

const ProgressBar = ({ progress }) => {
  return (
    <ProgressBarStyle className="progressbar_wrapper">
      <div className="progress_bar">
        <span className="progress_bar_overlay" style={{ width: progress ? progress : '50%' }}></span>
      </div>
    </ProgressBarStyle>
  );
};

export default ProgressBar;
