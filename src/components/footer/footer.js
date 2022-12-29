import "./footer.css"
import logoSvg from "../../assets/logoSvg.svg";
import {
    aboutUsFooter,
    addressFooter,
    blog, categoriesFooter, companyInfoFooter,
    contactUsFooter,
    dateFooter, designFooter, developmentFooter, email,
    logoDescription,
    logoName,
    numberFooter, ourPartnersFooter
} from "../../constants";

export const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-logo">
                <div className="header-logo-container">
                    <img src={logoSvg} alt="logoSvg" />
                    <span className="logo-text">{logoName}</span>
                </div>
                <span className="date-description">{dateFooter}</span>
                <span className="logo-description">{logoDescription}</span>
            </div>
            <div className="footer-contact">
                <span className="footer-description-header">{contactUsFooter}</span>
                <span className="footer-description">{numberFooter}</span>
                <span className="footer-description">{addressFooter}</span>
                <span className="footer-description">{email}</span>
            </div>
            <div className="footer-categories">
                <span className="footer-description-header">{categoriesFooter}</span>
                <span className="footer-description">{designFooter}</span>
                <span className="footer-description">{developmentFooter}</span>
            </div>
            <div className="footer-info">
                <span className="footer-description-header">{companyInfoFooter}</span>
                <span className="footer-description">{aboutUsFooter}</span>
                <span className="footer-description">{ourPartnersFooter}</span>
                <span className="footer-description">{blog}</span>
            </div>
        </div>
    )
}
