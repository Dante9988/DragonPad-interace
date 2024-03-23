import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import Button from "components/button";
import flagIcon from "assets/images/kycimg/flag.png"
import nidIcon from "assets/images/kycimg/nid-icon.svg"
import passportIcon from "assets/images/kycimg/pasport_icon.svg"
import licenceIcon from "assets/images/kycimg/licence-icon.svg"
import KycFormStyleWrapper from "./KycForm.style"

const KycForm = () => {

    const [isContryList, setCountryList] = useState(false)
    const [isChecked, setChecked] = useState({
        seleted: false,
        id: ""
    })

    const handleChecked = (e) => {
        setChecked({
            seleted: true,
            id: e.target.id
        })
    }

    return (
        <KycFormStyleWrapper>
            <div className="kyc_form">
                <h3 className="from_title">Issuing Country/Region</h3>
                <div className={`kyc_country_dropdown_sect ${isContryList ? 'active' : ''}`}>
                    <div className="kyc_country_dropbox" onClick={() => setCountryList(!isContryList)}>
                        <span><img src={flagIcon} alt="flag" className="img-fluid" /></span>
                        <h4>United States</h4>
                    </div>
                    <div className="kyc_country_dropList">
                        <ul>
                            <li>United States</li>
                            <li>United Kingdom</li>
                            <li>Japan</li>
                            <li>China</li>
                            <li>Germany</li>
                        </ul>
                    </div>
                </div>
                <h3>Select Identity Type</h3>
                <p>Should be your government issued photo identity</p>
                <div className="kyc_radio_sect">
                    <div className={`kyc_radio_btn ${isChecked.id === 'nid' ? 'active' : ''} `} id="nid" onClick={e => handleChecked(e)}>
                        <label>national id
                            <input type="radio" name="radio" onChange={e => handleChecked(e)} id="nid" />
                            <span className="checkmark"><FiCheck /></span>
                        </label>
                        <div className="kyc_icon">
                            <img src={nidIcon} alt="icon" className="imf-fluid" />
                        </div>
                    </div>
                    <div className={`kyc_radio_btn ${isChecked.id === 'passport' ? 'active' : ''} `} id="passport" onClick={e => handleChecked(e)}>
                        <label>PASSPORT
                            <input type="radio" checked="checked" name="radio" onChange={e => handleChecked(e)} id="passport" />
                            <span className="checkmark"><FiCheck /></span>
                        </label>
                        <div className="kyc_icon">
                            <img src={passportIcon} alt="icon" className="imf-fluid" />
                        </div>
                    </div>
                    <div className={`kyc_radio_btn ${isChecked.id === 'driverLicence' ? 'active' : ''} `} id="driverLicence" onClick={e => handleChecked(e)}>
                        <label>Driver’s licnse
                            <input type="radio" name="radio" onChange={e => handleChecked(e)} id="driverLicence" />
                            <span className="checkmark"> <FiCheck /> </span>
                        </label>
                        <div className="kyc_icon">
                            <img src={licenceIcon} alt="icon" className="imf-fluid" />
                        </div>
                    </div>
                </div>

                <Button href="/kyc-2" variant="blue">
                    Next step
                </Button>
            </div>
        </KycFormStyleWrapper>
    )
}

export default KycForm;