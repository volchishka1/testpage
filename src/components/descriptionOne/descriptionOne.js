import "./descriptioneOne.css"
import illustration from "../../assets/illustration.svg";
import facebookIcon from "../../assets/facebookIcon.svg";
import instaIcon from "../../assets/instaIcon.svg";
import twitterIcon from "../../assets/twitterIcon.svg";
import search from "../../assets/search.svg";
import {CustomButton} from "../customButton/customButton";
import {header, headerOne, searchButton} from "../constants";
export const DescriptionOne = () => {
    return (
        <div className="description-container">
            <div className="text-description">
                <span className="header-description">{header}<span className="header-dot">.</span></span>
                <span className="header-one-description">{headerOne}</span>
                <div className="input-container">
                    <div className="search-container">
                    <img className="search-style" src={search} alt="search" />
                    <input className="input-description" placeholder="find more than 430+ tools..."/>
                    </div>
                    <CustomButton buttonText={searchButton}/>
                </div>
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
