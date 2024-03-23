import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import nextArrowIcon from "assets/images/icons/next-arrow.png"
import {
    add,
    getDay,
    eachDayOfInterval,
    endOfMonth,
    format,
    isSameDay,
    parse,
    parseISO,
    startOfToday,
    startOfMonth,
    endOfWeek,
    startOfWeek,
    isSameMonth,
} from "date-fns";
import ProjectCard from "./ProjectCard/ProjectCard";
import ProjectCalendarStyleWrapper from "./ProjectCalendar.style";
// assets
import projects from "assets/data/projectsCalendar/data";
import coinIcon1 from "assets/images/project/previous-image.png";
import coinIcon2 from "assets/images/project/previous-image2.png";
import coinIcon3 from "assets/images/project/previous-image3.png";
import coinIcon4 from "assets/images/project/chain.png";

const ProjectCalendar = () => {
    //modal state
    const [isModal, setModal] = useState(false);
    // project state
    const [project, setProject] = useState({});

    let today = startOfToday();
    let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
    let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

    let days = eachDayOfInterval({
        start: startOfWeek(startOfMonth(firstDayCurrentMonth)),
        end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
    });

    // navigate to prev month
    const previousMonth = () => {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
        setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
    };
    // navigate to next month
    const nextMonth = () => {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
        setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
    };

    // project thumb icon shows by date
    const renderProjectImg = (day) => {
        const selectedProjects = projects.filter((project) =>
            isSameDay(parseISO(project.pDate), day)
        );

        if (selectedProjects.length > 0) {
            return (
                <div className="project_thumb">
                    {selectedProjects.map((item, idx) => (
                        <img
                            key={idx}
                            src={item.thumb}
                            alt="project thumb"
                            onClick={() => handleProject(item)}
                        />
                    ))}
                </div>
            );
        }
    };

    const modalHandle = () => {
        setModal(!isModal);
        setProject({});
    };

    const handleProject = (item) => {
        setProject(item);
        setModal(true);
    };

    // calendar date start from: class logic
    let colStartClasses = [
        "",
        "col-start-2",
        "col-start-3",
        "col-start-4",
        "col-start-5",
        "col-start-6",
        "col-start-7",
    ];

    return (
        <ProjectCalendarStyleWrapper>
            {isModal && (
                <div className="project-modal">
                    <div className="modal_content">
                        <ProjectCard {...project} modalHandle={modalHandle} />
                    </div>
                </div>
            )}
            <div className="container">
                <div className="project_calendar_header">
                    <div className="calendar_shorting_btn">
                        <button type="button" onClick={previousMonth}>
                            <FiChevronLeft />
                        </button>
                        <span className="current_date">
                            {format(firstDayCurrentMonth, "MMMM yyyy")}
                        </span>

                        <button type="button" onClick={nextMonth}>
                            <FiChevronRight />
                        </button>
                    </div>
                    <div className="item_sorting_list">
                        <button>
                            All Access
                            <img src={nextArrowIcon} alt="icon" />
                            <ul className="sub-menu">
                                <li>All Access</li>
                                <li>Public</li>
                                <li>Private</li>
                                <li>Community</li>
                            </ul>
                        </button>
                        <button>
                            All Block Chain
                            <img src={nextArrowIcon} alt="icon" />
                            <ul className="sub-menu">
                                <li>
                                    <img src={coinIcon1} alt="icon" /> Binance (BSC)
                                </li>
                                <li>
                                    <img src={coinIcon2} alt="icon" /> Ethereum (ETH)
                                </li>
                                <li>
                                    <img src={coinIcon3} alt="icon" /> Polygon
                                </li>
                                <li>
                                    <img src={coinIcon4} alt="icon" /> All Block Chain
                                </li>
                            </ul>
                        </button>
                    </div>
                </div>
                <div className="week_list grid grid-cols-7">
                    <span className="week_name">Sun</span>
                    <span className="week_name">Mon</span>
                    <span className="week_name">Tue</span>
                    <span className="week_name">Wed</span>
                    <span className="week_name">Thu</span>
                    <span className="week_name">Fri</span>
                    <span className="week_name">Sat</span>
                </div>

                <div className="month_list grid grid-cols-7">
                    {days.map((day, dayIdx) => (
                        <div
                            key={dayIdx}
                            className={`month_date ${isSameMonth(day, firstDayCurrentMonth) ? "active_date" : ""
                                } ${dayIdx === 0 ? colStartClasses[getDay(day)] : ""}`}
                        >
                            <time dateTime={format(day, "yyyy-MM-dd")}>
                                {format(day, "d")}
                            </time>

                            {/* render project thumb, that matched with project date*/}
                            {renderProjectImg(day)}
                        </div>
                    ))}
                </div>
            </div>
        </ProjectCalendarStyleWrapper>
    );
};

export default ProjectCalendar;
