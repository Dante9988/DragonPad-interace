import ScheduleStyleWrapper from "./Schedule.style"

const Schedule = () => {
    return (
        <ScheduleStyleWrapper id="schedule">
            <h4 className="widget_title">Schedule</h4>

            <div className="schedule_table">
                <table>
                    <tbody>
                        <tr className="table-header">
                            <th>Round</th>
                            <th>Opens</th>
                            <th>Closes</th> 
                        </tr>
                        <tr>
                            <td>Allocation</td>
                            <td>20.02.2022 08:00:00 UTC</td>
                            <td>22.02.2022 24:00:00 UTC</td> 
                        </tr>
                        <tr>
                            <td>Validator Round</td>
                            <td>29.02.2022 05:00:00 UTC</td>
                            <td>30.02.2022 03:00:00 UTC</td> 
                        </tr>
                        <tr>
                            <td>Staking Round</td>
                            <td>08.03.2022 12:00:00 UTC</td>
                            <td>10.03.2022 05:00:00 UTC</td> 
                        </tr>
                        <tr>
                            <td>Sale Ends</td>
                            <td>15.03.2022 02:00:00 UTC</td>
                            <td>18.03.2022 16:00:00 UTC</td> 
                        </tr>
                    </tbody>
                </table>
            </div>
        </ScheduleStyleWrapper>
    )
}

export default Schedule;