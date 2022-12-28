import heardIcon from "../../assets/heardIcon.svg";
import folderIcon from "../../assets/folderIcon.svg";
import {CustomButton} from "../customButton/customButton";
import "./customInstrument.css"
export const CustomInstrument = (props) => {
    const {name, status, iconName} = props;

    return (
        <div className="tool-one-container">
            <div className="top-container">
                <img src={iconName} alt="iconName" />
                <div className="tool">
                    <span className="tool-name">{name}</span>
                    <span className="tool-status">{status}</span>
                </div>
            </div>
            <span className="description-tool-one">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            <div className="down-container">
                <img className="heard-icon" src={heardIcon} alt="heardIcon" />
                <img className="folder-icon" src={folderIcon} alt="heardIcon" />
                <div className="button">
                    <CustomButton buttonText="Visit" />
                </div>
            </div>
        </div>
    )
}
