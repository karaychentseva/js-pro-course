import { useState } from "react";
import { PostType } from "../../types/PostType";
import "./Post.scss";

type PropsType = {
    data: PostType
}


const Post: React.FC<PropsType> = ({data}) => {
    const [isError, setIsError] = useState(false);
    
    const handleImgError = () => {
        console.log('error on image loading');
        setIsError(true);
    }

    let image = <img src="../404.png" className='post__img-item' />

    // если data.image есть и не случилась ошибка - показываем как есть
    // иначе показываем 404 
    if (data.image && !isError) {
        image =
            <img
                src={data.image}
                className='post__img-item'
                onError={handleImgError}/>
    }

    return (
        <div className="post">
            <div className="post__img">
                {image}
            </div>
            <h3 className="post__title">{data.title}</h3>
            <p className="post__text">{data.text}</p>
            <span className="post__date">{data.date}</span>
        </div>
    )
}

export default Post;
