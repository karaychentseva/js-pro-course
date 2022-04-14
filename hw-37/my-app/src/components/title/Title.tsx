import "./Title.scss";
import { ReactComponent as CatIcon} from "../../assets/cat.svg";
import useTranslate from "../../hooks/useTranslate";

const Title = () => {

    const { t } = useTranslate();
    return (
      
      <h1 className='title'>
        <CatIcon className='title__icon'/>
        {t('title.text')} <span className='title__item'> Online</span>
        <CatIcon className='title__icon'/>
      </h1>
    )
}

export default Title;