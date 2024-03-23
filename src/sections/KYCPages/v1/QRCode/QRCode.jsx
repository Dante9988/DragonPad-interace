import QRCodeStyleWrapper from "./QRCode.style"
import qrThumb from "assets/images/kycimg/QRcode.png"

const QRCode = () => {
    return (
        <QRCodeStyleWrapper>
            <div className="kyc_qrcode_sect">
                <div className="kyc_qrcode_content">
                    <h2>Want to continue with SmArt Phone ?</h2>
                    <div className="kyc_qrcode_thumb">
                        <img src={qrThumb} alt="qr code" className="img-fluid" />
                    </div>
                </div>
            </div>
        </QRCodeStyleWrapper>
    )
}

export default QRCode