import { Link, NavLink } from "react-router-dom";
import LangToggle from "../lang-toggle/LangToggle";
import "./Header.scss";
import useTranslate from "../../hooks/useTranslate";
import Username from "./user-name/Username";
import { useSelector } from "../../hooks/useSelector";
import { useActions } from "../../hooks/useActions";

import { ReactComponent as LogoutIcon } from "../../assets/logout.svg";
import { ReactComponent as LoginIcon } from "../../assets/login.svg";

type PropsType = {
    
}

const LINKS = [
    { url: "/posts", text: "Posts" },
    { url: "/posts-front", text: "Posts (Front)" },
    { url: "/clicker", text: "Clicker" },
]

const Header: React.FC<PropsType> = () => {

    const logged = useSelector(state => state.auth.logged);
    const { logout } = useActions();

    const handleLogout = () => {
        logout();
    }

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
            {logged ?
                <>
                    <Username/>
                    <LogoutIcon
                        className="icon logout-button"
                        onClick={handleLogout}
                    />
                </>
                :
                <Link to="/login">
                    <LoginIcon
                        className="icon logout-button"
                        onClick={handleLogout}
                    />
                </Link>
            }
        </div>
    )
}

export default Header;
