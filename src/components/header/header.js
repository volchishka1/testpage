import './headerStyle.css'
import logoSvg from "../../assets/logoSvg.svg";
import vectorDown from "../../assets/vectorDown.svg";
import {CustomButton} from "../customButton/customButton";

export const Header = () => {
    return (
        <div>
        <header className="App-header-container">
            <div className="Header-logo-container">
                <img src={logoSvg} alt="logoSvg" />
                <span className="Logo-text">antools.</span>
            </div>
            <div className="Header-text-center-container">
                <span>Home</span>
                <div>
                    <span>Categories</span>
                    <img className="vector-down" src={vectorDown} alt={vectorDown}/>
                </div>
                <span>My collections</span>
                <span>Blog</span>
            </div>
            <div className="button-container">
              <span className="login-text">
                  Login
              </span>
                <CustomButton buttonText="Sign Up" />
            </div>
        </header>
        </div>
);
}
