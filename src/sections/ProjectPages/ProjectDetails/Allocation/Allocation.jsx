import AllocationStyleWrapper from "./Allocation.style"

const Allocation = () => {
    return (
        <AllocationStyleWrapper id="allocation">
            <h4 className="widget_title">Allocation</h4>

            <div className="allocation_table">
                <table>
                    <tbody>
                        <tr className="table-header">
                            <th>Round</th>
                            <th>Opens</th>
                            <th>Closes</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>Allocation</td>
                            <td>20.02.2022 08:00:00 UTC</td>
                            <td>22.02.2022 24:00:00 UTC</td>
                            <td><button>Claim</button></td>
                        </tr>
                        <tr>
                            <td>Validator Round</td>
                            <td>29.02.2022 05:00:00 UTC</td>
                            <td>30.02.2022 03:00:00 UTC</td>
                            <td><button>Claim</button></td>
                        </tr>
                        <tr>
                            <td>Staking Round</td>
                            <td>08.03.2022 12:00:00 UTC</td>
                            <td>10.03.2022 05:00:00 UTC</td>
                            <td><button>Claim</button></td>
                        </tr>
                        <tr>
                            <td>Sale Ends</td>
                            <td>15.03.2022 02:00:00 UTC</td>
                            <td>18.03.2022 16:00:00 UTC</td>
                            <td><button>Claim</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </AllocationStyleWrapper>
    )
}

export default Allocation;