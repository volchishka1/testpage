import "./brand.css"
import microsoftLogo from "../../assets/microsoftLogo.svg";
import googleLogo from "../../assets/googleLogo.svg";
import slackLogo from "../../assets/slackLogo.svg";
import wordPressLogo from "../../assets/wordPressLogo.svg";

export const Brand = () => {
    return (
        <div className="header-container">
            <span className="header">Trusted more than 150+ brand</span>
            <div className="logo-container">
                <img src={microsoftLogo} alt="microsoftLogo" />
                <img src={googleLogo} alt="microsoftLogo" />
                <img src={slackLogo} alt="microsoftLogo" />
                <img src={wordPressLogo} alt="microsoftLogo" />
            </div>
        </div>
    )
}
