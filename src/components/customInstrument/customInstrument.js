import heardIcon from "../../assets/heardIcon.svg";
import folderIcon from "../../assets/folderIcon.svg";
import {CustomButton} from "../customButton/customButton";
import "./customInstrument.css"
import {customButtonInstrument, descriptionToolInstrument} from "../../constants";
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
            <div className="description-tool-container">
                <span className="description-tool-one">{descriptionToolInstrument}</span>
            </div>
            <div className="down-container">
                <img className="heard-icon" src={heardIcon} alt="heardIcon" />
                <img className="folder-icon" src={folderIcon} alt="heardIcon" />
                <div className="button">
                    <CustomButton buttonText={customButtonInstrument} />
                </div>
            </div>
        </div>
    )
}
