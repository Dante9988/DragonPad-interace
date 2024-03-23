import StakeHistoryStyleWrapper from "./StakeHistoryStyleWrapper.style"
import headingShape from 'assets/images/icons/steps.png'

const StakeHistory = () => {
    return (
        <StakeHistoryStyleWrapper id="schedule">
            <h3 className="widget_title">STAKE HISTORY <img src={headingShape} alt="shape" /></h3>

            <div className="schedule_table">
                <table>
                    <tbody>
                        <tr className="table-header">
                            <th>NO.</th>
                            <th>START</th>
                            <th>ENDS</th>
                            <th>LOCKED</th>
                            <th>REWARDS</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>0</td>
                            <td>22.02.2022   24:00:00 UTC</td>
                            <td>22.02.2022   24:00:00 UTC</td>
                            <td>160.00 BUSD</td>
                            <td>25.68 BUSD</td>
                            <td><button>Claim</button></td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>22.02.2022   24:00:00 UTC</td>
                            <td>22.02.2022   24:00:00 UTC</td>
                            <td>160.00 BUSD</td>
                            <td>25.68 BUSD</td>
                            <td><button>Claim</button></td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td>22.02.2022   24:00:00 UTC</td>
                            <td>22.02.2022   24:00:00 UTC</td>
                            <td>160.00 BUSD</td>
                            <td>25.68 BUSD</td>
                            <td><button>Claim</button></td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>22.02.2022   24:00:00 UTC</td>
                            <td>22.02.2022   24:00:00 UTC</td>
                            <td>160.00 BUSD</td>
                            <td>25.68 BUSD</td>
                            <td><button>Claim</button></td>
                        </tr>
                        <tr>
                            <td>04</td>
                            <td>22.02.2022   24:00:00 UTC</td>
                            <td>22.02.2022   24:00:00 UTC</td>
                            <td>160.00 BUSD</td>
                            <td>25.68 BUSD</td>
                            <td><button>Claim</button></td>
                        </tr>
                        <tr>
                            <td>05</td>
                            <td>22.02.2022   24:00:00 UTC</td>
                            <td>22.02.2022   24:00:00 UTC</td>
                            <td>160.00 BUSD</td>
                            <td>25.68 BUSD</td>
                            <td><button>Claim</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </StakeHistoryStyleWrapper>
    )
}

export default StakeHistory;