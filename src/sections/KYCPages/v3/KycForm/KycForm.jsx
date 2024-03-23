import { useState } from "react";
import Button from "components/button";
import { FiCheck } from "react-icons/fi";
import KycFormStyleWrapper from "./KycForm.style"

const KycForm = () => {

    const [isChecked, setChecked] = useState(false)

    return (
        <KycFormStyleWrapper>
            <div className="kyc_form">
                <h3 className="from_title">PERSONAL INFORMATION</h3>

                <div className="kyc_user_form">
                    <form>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id="firstName" placeholder="e.g.  Smith" className="form-control" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" placeholder="e.g.  Smith" className="form-control" />
                            </div>
                        </div>
                        <div className="input_field_wrapper form-group col-md-12">
                            <label htmlFor="state">State/Provience </label>
                            <input type="text" id="state" placeholder="e.g.  California" className="form-control" />
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="address1">Address Line 1</label>
                                <input type="text" id="address1" placeholder="e.g.  645 E Shaw Ave" className="form-control" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="address2">Address Line 2</label>
                                <input type="text" id="address2" placeholder="e.g.  Fresno, CA 93710," className="form-control" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="city">CITY</label>
                                <input type="text" id="city" placeholder="e.g.  New York" className="form-control" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="postCode">POST CODE</label>
                                <input type="text" id="postCode" placeholder="e.g.  4455" className="form-control" />
                            </div>
                        </div>

                        <div className={`kyc_trems_condition ${isChecked ? 'active' : ''}`}>
                            <span className="checkmark" onClick={() => setChecked(!isChecked)}> <FiCheck /> </span>
                            <input type="checkbox" id="agrredCheck" onChange={() => setChecked(!isChecked)} />
                            <span>
                                I accept the
                                <a href="#">Term of Conditions</a>
                                and
                                <a href="#">Privacy Policy</a>
                            </span>
                        </div>
                    </form>
                </div>

                <Button href="# " variant="blue">
                    Submit Kyc
                </Button>
            </div>
        </KycFormStyleWrapper>
    )
}

export default KycForm;