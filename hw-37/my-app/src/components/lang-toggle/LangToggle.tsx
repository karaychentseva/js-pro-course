import useTranslate from "../../hooks/useTranslate";
import "./LangToggle.scss";

type PropsType = {

}
const LangToggle: React.FC<PropsType> = () => {
    
    const { lang, setLang, t } = useTranslate();
    
    const changeLangHandler = () => {
        lang === "en" ? setLang("ru") : setLang("en");
    }

    return (
        <div className="lang-toggle">
            <button className="lang-btn" onClick={changeLangHandler}>
                {t('langtoggle.text')}
            </button>
            <div className="lang-text">{lang}</div>
        </div>
    )
}

export default LangToggle;
