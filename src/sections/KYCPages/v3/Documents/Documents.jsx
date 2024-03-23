import DocumentsStyleWrapper from "./Documents.style"
import iconLink from "assets/images/kycimg/iconLink.svg"
import downloadIcon from "assets/images/kycimg/icon_download.svg"

const Documents = () => {
    return (
        <DocumentsStyleWrapper>
            <div className="kyc_documents_sect">
                <h2>YOUR DOCUMENTS</h2>

                <ul className="kyc_documents_list">
                    <li>
                        <span>
                            <img src={iconLink} alt="icon" className="img-fluid" />
                            NID_front.JPG
                        </span>
                        <img src={downloadIcon} alt="icon" className="img-fluid" />
                    </li>
                    <li>
                        <span>
                            <img src={iconLink} alt="icon" className="img-fluid" />
                            NID_back.JPG
                        </span>
                        <img src={downloadIcon} alt="icon" className="img-fluid" />
                    </li>
                    <li>
                        <span>
                            <img src={iconLink} alt="icon" className="img-fluid" />
                            Selfie_with_NID.JPG
                        </span>
                        <img src={downloadIcon} alt="icon" className="img-fluid" />
                    </li>

                </ul>
            </div>
        </DocumentsStyleWrapper>
    )
}

export default Documents