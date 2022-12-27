import "./customButton.css"

export const CustomButton = (props) => {
    const {buttonText} = props;
    return (
        <button className="button-style">
                  <span className="button-text">
                  {buttonText}
                  </span>
        </button>
    )
}
