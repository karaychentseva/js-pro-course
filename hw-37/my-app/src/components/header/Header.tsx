import { NavLink } from "react-router-dom";
import LangToggle from "../lang-toggle/LangToggle";
import "./Header.scss";

type PropsType = {
    
}
const Header: React.FC<PropsType> = () => {
    
    return (
        <div className="header">
            <NavLink to="/home">
                <h3>Cat Blog</h3>
            </NavLink>
            {/*  */}
            <NavLink
                to="/registration"
                className={({ isActive }) => isActive ? "_active" : ""}
            >
                Register
            </NavLink>
            <NavLink
                to="/posts"
                className={({ isActive }) => isActive ? "_active" : ""}
            >
                Posts
            </NavLink>
            <LangToggle/>
        </div>
    )
}

export default Header;
