import titleShape from "assets/images/project/project-heading-image.png"
import TokenInfoStyleWrapper from "./TokenInfo.style"

const TokenInfo = ({ title, tokenInfo }) => {
    return (
        <TokenInfoStyleWrapper>
            <div className="token_info_title">
                <h4>{title}</h4>
                <img src={titleShape} alt="shape" />
            </div>
            <ul className="token_info_list">
                {tokenInfo?.map((info, i) => (
                    <li key={i}>
                        <span className="token_info_key">{info.title}</span>
                        <span className="token_info_value">{info.text}</span>
                    </li>
                ))}
            </ul>
        </TokenInfoStyleWrapper>
    )
}

export default TokenInfo;