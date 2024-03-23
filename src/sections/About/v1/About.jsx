import LiveProject from "sections/Projects/v2"
import Tutorial from "sections/Tutorial/v1"

import AboutStyleWrapper from "./About.style"

const About = () => {
    return (
        <AboutStyleWrapper>
            <LiveProject />
            <Tutorial />
        </AboutStyleWrapper>
    )
}

export default About