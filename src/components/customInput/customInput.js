import "./customInput.css"
import {CustomButton} from "../customButton/customButton";

export const CustomInput = (props) => {
    const {icon, placeholderName, buttonName} = props;

    return (
        <div className="input-container">
            <div className="search-container">
                <img className="icon-style" src={icon} alt="icon" />
                <input className="input-description" placeholder={placeholderName}/>
            </div>
            <CustomButton buttonText={buttonName}/>
        </div>
    )
}
