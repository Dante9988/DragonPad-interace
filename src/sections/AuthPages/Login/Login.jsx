import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import Button from "components/button";
import LoginStyleWrapper from "./Login.style";

const Login = () => {
  const [isChecked, setChecked] = useState(false);
  return (
    <LoginStyleWrapper>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="auth_form_content">
              <div className="auth_form">
                <h2>log In</h2>
                <h3>
                  Inter your email address and password to get access your
                  account
                </h3>
                <form>
                  <div className="row input_field_row">
                    <div className="form-group col-md-12">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email address"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="auth_form_bttom">
                    <div
                      className={`pass_remember_check ${
                        isChecked ? "active" : ""
                      }`}
                    >
                      <label>
                        Remember me
                        <input
                          type="checkbox"
                          onChange={() => setChecked(!isChecked)}
                        />
                      </label>
                      <span
                        className="checkmark"
                        onClick={() => setChecked(!isChecked)}
                      >
                        {" "}
                        <FiCheck />
                      </span>
                    </div>
                    <a href="/forget-password" className="forget_pass_btn">
                      Forget Password ?
                    </a>
                  </div>
                  <Button variant="blue" href="# ">
                    {" "}
                    Submit{" "}
                  </Button>
                </form>
                <h4>
                  Don’t have an account ? <a href="/register">Sign up now !</a>
                </h4>
              </div>
              <div className="autho_from_shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </LoginStyleWrapper>
  );
};

export default Login;
