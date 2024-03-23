import { FiX } from "react-icons/fi";
import { useModal } from "utils/ModalContext";
import ShareModalStyleWrapper from "./ShareModal.style";
import data from "assets/data/modal/socialShare";

const ShareModal = () => {
  const { shareModalHandle } = useModal();
  return (
    <>
      <ShareModalStyleWrapper className="modal_overlay">
        <div className="mint_modal_box">
          <div className="mint_modal_content">
            <div className="modal_header">
              <h2>SHARE POST</h2>
              <button onClick={(e) => shareModalHandle(e)}>
                <FiX />
              </button>
            </div>
            <div className="modal_body text-center">
              <div className="social_profiles">
                {data?.map((item, i) => ( 
                    <a key={i} href={item.url}>
                      {item.thumb ? (
                        <img src={item.thumb} alt="bithu nft social" />
                      ) : (
                        item.icon
                      )}
                    </a> 
                ))}
              </div>
            </div>
          </div>
        </div>
      </ShareModalStyleWrapper>
    </>
  );
};

export default ShareModal;
