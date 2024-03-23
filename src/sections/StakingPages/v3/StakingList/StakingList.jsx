import StakingItem from "./StakingItem/StakingItem"
import StakingListStyleWrapper from "./StakingList.style"
import data from "assets/data/staking/dataV1"

const StakingList = () => {
    return (
        <StakingListStyleWrapper>
            <div className="container">
                <div className="row staking_items_row">
                    {data?.map((stake, i) => (
                        <div key={i} className="col-lg-4 col-md-6">
                            <StakingItem {...stake} />
                        </div>
                    ))}
                </div>
            </div>
        </StakingListStyleWrapper>
    )
}

export default StakingList;