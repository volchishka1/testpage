import "./newcomer.css"
import {CustomButton} from "../customButton/customButton";
import {CustomInstrument} from "../CustomInstrument/customInstrument";
import {freePaid, free, paid, zeplin, phpStorm, toolBox, procreate} from "../../constants";
import zeplinIcon from "../../assets/zeplinIcon.svg";
import phpStormIcon from "../../assets/phpStormIcon.svg";
import toolBoxIcon from "../../assets/toolBoxIcon.svg";
import procreateIcon from "../../assets/procreateIcon.svg";

export const Newcomer = () => {
    return (
        <div className="newcomer-container">
            <div className="header-container-newcomer">
                <span className="header">Newcomer Tools</span>
                <span className="description-newcomer">Wow! see the latest update of the most recommended tools from reliable designers and developers</span>
                <CustomButton buttonText="Explore more" />
            </div>
            <div className="custom-instrument-container">
                <div className="custom-instrument-top">
                    <CustomInstrument name={zeplin} status={freePaid} iconName={zeplinIcon}/>
                    <CustomInstrument name={phpStorm} status={free} iconName={phpStormIcon}/>
                </div>
                <div className="custom-instrument-down">
                    <CustomInstrument name={toolBox} status={free} iconName={toolBoxIcon}/>
                    <CustomInstrument name={procreate} status={paid} iconName={procreateIcon}/>
                </div>
            </div>
        </div>
)
}
