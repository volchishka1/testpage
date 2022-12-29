import './headerStyle.css'
import logoSvg from "../../assets/logoSvg.svg";
import vectorDown from "../../assets/vectorDown.svg";
import {CustomButton} from "../customButton/customButton";
import {blog, myCollections, singUp, categories, home, login, logoName} from "../../constants";

export const Header = () => {
    return (
        <div>
        <header className="App-header-container">
            <div className="Header-logo-container">
                <img src={logoSvg} alt="logoSvg" />
                <span className="Logo-text">{logoName}</span>
            </div>
            <div className="Header-text-center-container">
                <span>{home}</span>
                <div>
                    <span>{categories}</span>
                    <img className="vector-down" src={vectorDown} alt={vectorDown}/>
                </div>
                <span>{myCollections}</span>
                <span>{blog}</span>
            </div>
            <div className="button-container">
              <span className="login-text">
                  {login}
              </span>
                <CustomButton buttonText={singUp} />
            </div>
        </header>
        </div>
);
}
