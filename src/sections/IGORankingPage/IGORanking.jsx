import IGORankingStyleWrapper from "./IGORanking.style.js"
import data from "assets/data/ranking/dataV1";

const IGORanking = () => {

    return (
        <IGORankingStyleWrapper>
            <div className="container">
                <div className="ranking_list">
                    {data?.map((lb, i) => (
                        <ul key={i} className="ranking_list_item">
                            <li data-title="#Ranks"> {lb.rank} </li>
                            <li data-title="Name"><img src={lb.icon} alt="" /> {lb.name}</li>
                            <li data-title="Price">{lb.price}</li>
                            <li data-title="CGH 24H">{lb.cgh}</li>
                            <li data-title="Market Cap">{lb.marketCap}</li>
                            <li data-title="Vol 24H">{lb.vol}</li>
                            <li data-title="IGO ROI">{lb.roi}</li>
                        </ul>
                    ))}
                </div>
            </div>
        </IGORankingStyleWrapper>
    )
}

export default IGORanking;