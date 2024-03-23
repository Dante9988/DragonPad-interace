import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import Button from "components/button";
import RegisterStyleWrapper from "./Register.style"; 

const Register = () => {
    const [isChecked, setChecked] = useState(false)
    return (
        <RegisterStyleWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="auth_form_content">
                            <div className="auth_form">
                                <h2>CREATE ACCOUNT</h2>
                                <h3>Inter your name, valid email address and password to register your account</h3>
                                <form>
                                    <div className="row input_field_row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="fullName">Full Name</label>
                                            <input type="text" id="fullName" placeholder="Enter your email address" className="form-control" />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label htmlFor="email">Email Address</label>
                                            <input type="email" id="email" placeholder="Enter your email address" className="form-control" />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" id="password" placeholder="Enter your password" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="auth_form_bttom">
                                        <div className={`pass_remember_check ${isChecked ? 'active' : ''}`}>
                                            <label>I accept the
                                                <a href="#">Term of Conditions</a>
                                                and
                                                <a href="#">Privacy Policy</a>
                                                <input type="checkbox" onChange={() => setChecked(!isChecked)} />
                                            </label>
                                            <span className="checkmark" onClick={() => setChecked(!isChecked)}> <FiCheck /></span>
                                        </div>
                                    </div>
                                    <Button variant="blue"> Submit </Button>
                                </form>
                                <h4>
                                    Already have an account ? {" "}
                                    <a href="/login">Sign In now !</a>
                                </h4>
                            </div>
                            <div className="autho_from_shadow"></div>
                        </div>
                    </div>
                </div>
            </div>
        </RegisterStyleWrapper>
    )
}

export default Register;