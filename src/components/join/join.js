import "./joinStyle.css"
import {CustomInput} from "../customInput/customInput";
import {enterEmail, joinUsButton,} from "../../constants";
import search from "../../assets/search.svg";

export const Join = () => {
    return (
        <div className="join-container">
            <span className="header-join">Become a contributor?</span>
            <span className="description-join">Join us and get tips & tricks to become a great Designer and Developer</span>
            <CustomInput icon={search} placeholderName={enterEmail} buttonName={joinUsButton} />
            <div className="line">

            </div>
        </div>
    )
}
