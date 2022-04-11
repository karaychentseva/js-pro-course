import "./SubmitButton.scss";

type PropsType = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}
const SubmitButton: React.FC<PropsType> = ({children, onClick}) => {
    
    return (
        <button className="submit-button" onClick={onClick}>
            {children}
        </button>
    )
}

export default SubmitButton;
