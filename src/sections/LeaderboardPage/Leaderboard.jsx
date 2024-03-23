import Pagination from "components/pagination/Pagination"
import data from "assets/data/leaderboard/dataV1";
import LeaderboardStyleWrapper from "./Leaderboard.style.js"

const Leaderboard = () => {
    return (
        <LeaderboardStyleWrapper>
            <div className="container">
                <div className="leaderboard_list">
                    {data?.map((lb, i) => (
                        <ul key={i} className="leaderboard_list_item">
                            <li data-title="#Ranks"> {lb.rank} </li>
                            <li data-title="Name">{lb.name}</li>
                            <li data-title="Public key">{lb.key}</li>
                            <li data-title="Locked">{lb.locked}</li>
                            <li data-title="Balance">{lb.balance}</li>
                        </ul>
                    ))}
                </div>
                <Pagination />
            </div>
        </LeaderboardStyleWrapper>
    )
}

export default Leaderboard;