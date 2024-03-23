import Button from "components/button";
import uploadIcon from "assets/images/kycimg/uploadFileicon.svg"
import checkIcon from "assets/images/kycimg/checkicon.svg"

import KycFormStyleWrapper from "./KycForm.style"

const KycForm = () => {


    return (
        <KycFormStyleWrapper>
            <div className="kyc_form">
                <h3 className="from_title">UPLOAD DOCUMENTS</h3>
                <ul className="upload_doc_list">
                    <li>
                        <div className="upload_bg">
                            <div className="upload-btn-wrapper">
                                <span><img src={uploadIcon} alt="icon" className="img-fluid" /></span>
                                <input type="file" name="myfile" />
                            </div>
                        </div>
                        <h4>National ID Front</h4>
                    </li>
                    <li>
                        <div className="upload_bg">
                            <div className="upload-btn-wrapper">
                                <span><img src={uploadIcon} alt="icon" className="img-fluid" /></span>
                                <input type="file" name="myfile" />
                            </div>
                        </div>
                        <h4>National ID Back</h4>
                    </li>
                    <li>
                        <div className="upload_bg">
                            <div className="upload-btn-wrapper">
                                <span><img src={uploadIcon} alt="icon" className="img-fluid" /></span>
                                <input type="file" name="myfile" />
                            </div>
                        </div>
                        <h4>Selfie with National ID</h4>
                    </li>
                </ul>

                <ul className="doc_requirements">
                    <li>
                        <span>
                            <img src={checkIcon} alt="icon" className="img-fluid" />
                        </span>
                        File accepted: JPEG/JPS/PNG (Max size: 250 KB)
                    </li>
                    <li className="active">
                        <span>
                            <img src={checkIcon} alt="icon" className="img-fluid" />
                        </span>Document should be good condition
                    </li>
                    <li>
                        <span>
                            <img src={checkIcon} alt="icon" className="img-fluid" />
                        </span>
                        Document must be valid period
                    </li>
                    <li>
                        <span>
                            <img src={checkIcon} alt="icon" className="img-fluid" />
                        </span>
                        Face must be clear visible
                    </li>
                    <li>
                        <span>
                            <img src={checkIcon} alt="icon" className="img-fluid" />
                        </span>
                        Not has today’s date
                    </li>
                </ul>

                <div className="nid_number_from">
                    <h3>National ID Number</h3>
                    <form>
                        <input type="text" placeholder="e.g.  58933699" />
                    </form>
                </div>

                <Button href="/kyc-3" variant="blue">
                    Next step
                </Button>
            </div>
        </KycFormStyleWrapper>
    )
}

export default KycForm;