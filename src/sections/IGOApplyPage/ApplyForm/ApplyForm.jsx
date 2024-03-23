import { FaTelegramPlane, FaTwitter } from "react-icons/fa"
import Button from "components/button";
import ApplyFormStyleWrapper from "./ApplyFrom.style"

const ApplyForm = () => {
    return (
        <ApplyFormStyleWrapper>
            <form>
                <div className="form_widgets">
                    <div className="form-group">
                        <label htmlFor="projectName">Project Name</label>
                        <input type="text" id="projectName" placeholder="Project Name" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Email" className="form-control" />
                    </div>
                    <div className="input_field_wrapper form-group col-md-12">
                        <label htmlFor="projectDetails">Project Brief</label>
                        <textarea id="projectDetails" cols="30" rows="10" placeholder="Project Brief"></textarea>
                    </div>
                </div>

                <div className="form_widgets form_check">
                    <h5>BLOCKCHAIN/PLATFORM</h5>
                    <label>Binance Smart Chain
                        <input type="radio" name="platfrom" value="binance" />
                    </label>
                    <label>Solana
                        <input type="radio" name="platfrom" value="solana" />
                    </label>
                    <label>Ethereum
                        <input type="radio" name="platfrom" value="ethereum" />
                    </label>
                    <label>Polygon (Matic)
                        <input type="radio" name="platfrom" value="polygon" />
                    </label>
                </div>

                <div className="form_widgets form_check">
                    <h5>PROJECT STATUS</h5>

                    <label>Just an initial idea
                        <input type="radio" name="projectStatus" value="initial" />
                    </label>
                    <label>Idea with White Paper
                        <input type="radio" name="projectStatus" value="whitePaper" />
                    </label>
                    <label>In early development
                        <input type="radio" name="projectStatus" value="development" />
                    </label>
                    <label>Ready to launch
                        <input type="radio" name="projectStatus" value="production" />
                    </label>
                </div>

                <div className="form_widgets form_check">
                    <h5>HAVE YOU ALREADY RAISED FUNDS ?</h5>

                    <label>Yes
                        <input type="radio" name="funds" value="yes" />
                    </label>
                    <label>No
                        <input type="radio" name="funds" value="no" />
                    </label>
                </div>

                <div className="form_widgets form_check">
                    <h5>IS YOUR TEAM ANON OR PUBLIC</h5>
                    <label>Anon
                        <input type="radio" name="visibility" value="anon" />
                    </label>
                    <label>Fully Public
                        <input type="radio" name="visibility" value="Public" />
                    </label>
                    <label>Mixed
                        <input type="radio" name="visibility" value="mixed" />
                    </label>
                </div>

                <div className="form_widgets">
                    <div className="form-group">
                        <label htmlFor="fundterget">TARGET RAISE</label>
                        <input type="text" id="fundterget" placeholder="How much are you planning on raising on the IGO?" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="projectLink">PROJECT WEBSITE / LINK TO WHITEPAPER</label>
                        <input type="text" id="projectLink" placeholder="Enter link" className="form-control" />
                    </div>
                </div>

                <div className="form_widgets">
                    <div className="form-group">
                        <label htmlFor="telegram">TELEGRAM GROUP</label>
                        <div className="input_with_icon">
                            <div className="input_social_icon">
                                <FaTelegramPlane />
                            </div>
                            <input type="text" id="telegram" placeholder="Enter telegram group link" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="telegram">Project Twitter</label>
                        <div className="input_with_icon">
                            <div className="input_social_icon">
                                <FaTwitter />
                            </div>
                            <input type="text" id="twitter" placeholder="Enter twitter link" className="form-control" />
                        </div>
                    </div>
                </div>

                <Button variant="blue" lg>
                    Submit IGO Project
                </Button>
            </form>
        </ApplyFormStyleWrapper>
    )
}

export default ApplyForm;