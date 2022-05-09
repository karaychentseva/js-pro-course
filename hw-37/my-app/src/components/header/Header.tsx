import { Link, NavLink } from "react-router-dom";
import LangToggle from "../lang-toggle/LangToggle";
import "./Header.scss";

type PropsType = {
    
}

const LINKS = [
    { url: "/registration", text: "Register" },
    { url: "/posts", text: "Posts" },
    { url: "/posts-front", text: "Posts (Front)" },
    { url: "/clicker", text: "Clicker" },
]

const Header: React.FC<PropsType> = () => {
    
    return (
        <div className="header">
            <Link to="/home">
                <h3>Cat Blog</h3>
            </Link>
            {LINKS.map(({ url, text }) => 
                    <NavLink
                        key={url}
                        to={url}
                        className={({ isActive }) => isActive ? "_active" : ""}
                    >
                        {text}
                    </NavLink>
            )}
            <LangToggle/>
        </div>
    )
}

export default Header;
