import "./Title.scss";
import { ReactComponent as CatIcon} from "../../assets/cat.svg";

const Title = () => {

    return (
      
      <h1 className='title'>
        <CatIcon className='title__icon'/>
        Make your blog <span className='title__item'> Online</span>
        <CatIcon className='title__icon'/>
      </h1>
    )
}

export default Title;