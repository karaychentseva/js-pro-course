import { useContext, useState } from "react";
import LangContext from "../../contexts/LangContext";
import "./LangToggle.scss";

type PropsType = {
    
}
const LangToggle: React.FC<PropsType> = () => {
    
    const { lang, setLang } = useContext(LangContext);
    
    const changeLangHandler = () => {
        setLang((prevValue: any) => prevValue === "en" ? "ru" : "en");
    }

    return (
        <div className="lang-toggle">
            <button className="lang-btn" onClick={changeLangHandler}>
                { lang === "en" ? "Change Language" : "Сменить язык" }
                </button>
            <div className="lang-text">{lang}</div>
        </div>
    )
}

export default LangToggle;
