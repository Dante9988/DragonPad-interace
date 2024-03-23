import { useState } from 'react';
import ModalVideo from 'react-modal-video'
import { FaPlay } from "react-icons/fa";
import videoThumb from "assets/images/project/project-video.jpg"
import SummaryStyleWrapper from "./Summary.style"

const Summary = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <SummaryStyleWrapper id="projectSummary">
            <h4 className="widget_title">Project Summary</h4>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur cites of the word in classical literature.</p>
            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original</p>

            <div className="vedio_player">
                <img src={videoThumb} alt="video thumb" />
                <ModalVideo channel='youtube' isOpen={isOpen} videoId='1vpzW13m_IM' onClose={() => setIsOpen(false)} />
                <span onClick={() => setIsOpen(true)}> <FaPlay /> </span>
            </div>
        </SummaryStyleWrapper>
    )
}

export default Summary;