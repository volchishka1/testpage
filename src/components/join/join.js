import "./joinStyle.css"
import {CustomInput} from "../customInput/customInput";
import {descriptionJoin, enterEmail, headerJoin, joinUsButton,} from "../../constants";
import search from "../../assets/search.svg";

export const Join = () => {
    return (
        <div className="join-container">
            <span className="header-join">{headerJoin}</span>
            <span className="description-join">{descriptionJoin}</span>
            <CustomInput icon={search} placeholderName={enterEmail} buttonName={joinUsButton} />
            <div className="line"></div>
        </div>
    )
}
