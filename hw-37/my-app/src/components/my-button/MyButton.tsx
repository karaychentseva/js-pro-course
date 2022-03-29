import "./MyButton.scss";

type PropsType = {
    text?: string,
    colorClass?: string
}

const MyButton = ({text = "Default text", colorClass = "green"}: PropsType) => {

    const cssClasses = `main-button ${colorClass}`;
    const handlClick = () => console.log('clicked: ' + text);
    
    return (
        <button className={cssClasses} onClick={handlClick}>
            {text}
        </button>
    )
}

export default MyButton;