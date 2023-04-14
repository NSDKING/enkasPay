import "./css/defaultButton.css"

export default function DefaultButton({text, onPress, bgcolor, textcolor, width, height, marginTop, WebkitBoxShadow, MozBoxShadow, boxShadow}) {

    return(
        
        <button
            className="default-button"
            onClick={onPress}
            style={{
                backgroundColor: bgcolor,
                width:width,
                height:height,
                marginTop:marginTop,
                WebkitBoxShadow: WebkitBoxShadow,
                MozBoxShadow: MozBoxShadow,
                boxShadow:boxShadow,
                color:textcolor
            }}
        >
            <p>{text}</p>
        
        </button>

    )
}