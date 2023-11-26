import "./css/defaultButton.css";

export default function DefaultButton({
  text,
  onPress,
  bgcolor,
  textcolor,
  width,
  height,
  marginTop,
  WebkitBoxShadow,
  MozBoxShadow,
  boxShadow,
  type,
  isDisabled,  // New prop to determine whether the button should be disabled
}) {
  return (
    <button
      className="default-button"
      onClick={isDisabled ? null : onPress}  // Conditionally set onClick based on isDisabled
      style={{
        backgroundColor: bgcolor,
        width: width,
        height: height,
        marginTop: marginTop,
        WebkitBoxShadow: WebkitBoxShadow,
        MozBoxShadow: MozBoxShadow,
        boxShadow: boxShadow,
        color: textcolor,
        cursor: isDisabled ? 'not-allowed' : 'pointer',  // Change cursor style based on isDisabled
      }}
      type={type}
      disabled={isDisabled}  // Set the disabled attribute based on isDisabled
    >
      <p>{text}</p>
    </button>
  );
}
