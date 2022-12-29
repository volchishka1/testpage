import './toolsStyle.css'
import {CustomInstrument} from "../customInstrument/customInstrument.js";
import figmaIcon from "../../assets/figmaIcon.svg";
import diamondIcon from "../../assets/diamondIcon.svg";
import visualStudioIcon from "../../assets/visualStudioIcon.svg";
import notionIcon from "../../assets/notionIcon.svg";
import slackIcon from "../../assets/slackIcon.svg";
import invisionIcon from "../../assets/invisionIcon.svg";
import {
    descriptionTools,
    figma,
    free,
    tools,
    sketch,
    visualStudio,
    invision,
    slack,
    notion,
    trialPaid, freePaid, loadMore
} from "../../constants";
import {CustomButton} from "../customButton/customButton";

export const Tools = () => {
    return (
        <div className="tools-container">
            <div className="header-container-tools">
                <span className="headers">{tools}</span>
                <span className="header-one">{descriptionTools}</span>
            </div>
            <div className="instruments-container-top">
                <CustomInstrument name={figma} status={free} iconName={figmaIcon}/>
                <CustomInstrument name={sketch} status={trialPaid} iconName={diamondIcon}/>
                <CustomInstrument name={visualStudio} status={free} iconName={visualStudioIcon}/>
            </div>
            <div className="instruments-container-down">
                <CustomInstrument name={notion} status={freePaid} iconName={notionIcon}/>
                <CustomInstrument name={slack} status={freePaid} iconName={slackIcon}/>
                <CustomInstrument name={invision} status={freePaid} iconName={invisionIcon}/>
            </div>
            <CustomButton buttonText={loadMore} />
        </div>
    )
}
