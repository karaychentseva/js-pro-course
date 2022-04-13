import LangToggle from "../lang-toggle/LangToggle";
import "./Header.scss";

type PropsType = {
    
}
const Header: React.FC<PropsType> = () => {
    
    return (
        <div className="header">
            <h3>Cat Blog</h3>
            <LangToggle/>
        </div>
    )
}

export default Header;
