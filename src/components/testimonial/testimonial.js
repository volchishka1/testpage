import "./testimonialStyle.css"
import pictureMan from "../../assets/pictureMan.svg"
import quotes from "../../assets/quotes.svg"
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
                    Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.
                </span>
                </div>
            </div>
        </div>
    )
}
