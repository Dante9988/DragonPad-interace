import KycForm from "./KycForm/KycForm"
import QRCode from "./QRCode/QRCode"

import KycStyleWrapper from "./Kyc.style"

const Kyc = () => {
    return (
        <KycStyleWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <KycForm />
                    </div>
                    <div className="col-md-6">
                        <QRCode />
                    </div>
                </div>
            </div>
        </KycStyleWrapper>
    )
}

export default Kyc;