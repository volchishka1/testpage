import "./newcomer.css"
import {CustomButton} from "../customButton/customButton";
import {CustomInstrument} from "../customInstrument/customInstrument";
import {
    freePaid,
    free,
    paid,
    zeplin,
    phpStorm,
    toolBox,
    procreate,
    newcomerHeader, newcomerDescription, newcomerButton
} from "../../constants";
import zeplinIcon from "../../assets/zeplinIcon.svg";
import phpStormIcon from "../../assets/phpStormIcon.svg";
import toolBoxIcon from "../../assets/toolBoxIcon.svg";
import procreateIcon from "../../assets/procreateIcon.svg";

export const Newcomer = () => {
    return (
        <div className="newcomer-container">
            <div className="header-container-newcomer">
                <span className="header-newcomer">{newcomerHeader}</span>
                <span className="description-newcomer">{newcomerDescription}</span>
                <CustomButton buttonText={newcomerButton} />
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
