import "./descriptioneOne.css"
import illustration from "../../assets/illustration.svg";
import facebookIcon from "../../assets/facebookIcon.svg";
import instaIcon from "../../assets/instaIcon.svg";
import twitterIcon from "../../assets/twitterIcon.svg";
import search from "../../assets/search.svg";
import {findMore, header, headerOne, searchButton} from "../../constants";
import {CustomInput} from "../customInput/customInput";
export const DescriptionOne = () => {
    return (
        <div className="description-container">
            <div className="text-description">
                <span className="header-description">{header}<span className="header-dot">.</span></span>
                <span className="header-one-description">{headerOne}</span>
                <CustomInput icon={search} placeholderName={findMore} buttonName={searchButton} />
                <div className="social-network">
                    <img className="facebookIcon" src={facebookIcon} alt="facebookIcon" />
                    <img className="instaIcon" src={instaIcon} alt="instaIcon" />
                    <img className="twitterIcon" src={twitterIcon} alt="twitterIcon" />
                </div>
            </div>
            <img className="description-image" src={illustration} alt="illustration" />
        </div>
    )
}
