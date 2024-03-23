import Button from "components/button";
import ForgetPasswordStyleWrapper from "./ForgetPassword.style";

const ForgetPassword = () => {
    return (
        <ForgetPasswordStyleWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="auth_form_content">
                            <div className="auth_form">
                                <h2>RESET PASSWORD</h2>
                                <h3>We’ll send you an email with a link to reset the Password to your account</h3>
                                <form>
                                    <div className="row input_field_row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="email">Email Address</label>
                                            <input type="email" id="email" placeholder="Enter your email address" className="form-control" />
                                        </div>
                                    </div>
                                    <Button variant="blue" href="#"> Get Reset Link </Button>
                                </form>
                                <h4>
                                    Remember your password ?{" "}
                                    <a href="/login">Sign In now !</a>
                                </h4>
                            </div>
                            <div className="autho_from_shadow"></div>
                        </div>
                    </div>
                </div>
            </div>
        </ForgetPasswordStyleWrapper>
    )
}

export default ForgetPassword;