import "./testimonialStyle.css"
import pictureMan from "../../assets/pictureMan.svg"
import quotes from "../../assets/quotes.svg"
import {incididuntCillum} from "../../constants";
export const Testimonial = () => {
    return (
        <div className="testimonial-container">
            <div className="testimonial-picture">
                <img src={pictureMan} alt="pictureMan" />
                <div className="name-man-container">
                    <span className="name-man">Ronald Richards</span>
                    <span className="position-man">Product Manager</span>
                </div>
            </div>
            <div className="testimonial-description-container">
                <img className="quotes" src={quotes} alt="quotes" />
                <div className="testimonial-test-container">
                <span className="testimonial-text-description">
                    {incididuntCillum}
                </span>
                </div>
            </div>
        </div>
    )
}
