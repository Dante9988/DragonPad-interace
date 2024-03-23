import { SectionTitle } from "components/sectionTitle";
import FeaturesStyleWrapper from "./Features.style"
import data from "assets/data/about/aboutDataV1"

const Features = () => {
    return (
        <FeaturesStyleWrapper>
            <div className="key_points_section main-project-area">
                <div className="container">
                    <div className="sec-inner align-items-center">
                        <SectionTitle subtitle="FEATURES" title="KEY POINTS" />
                        <div className="key_points_conttent">
                            <div className="row items-row">
                                {data?.map((item, i) => (
                                    <div key={i} className="col-md-6 col-lg-3">
                                        <div className="key_points_item">
                                            <div className="key_points_item_img">
                                                <img src={item.icon} alt="icon" className="img-fluid" />
                                            </div>
                                            <div className="key_points_item_text">
                                                <h4>{item.title}</h4>
                                                <p>{item.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FeaturesStyleWrapper>
    )
}

export default Features