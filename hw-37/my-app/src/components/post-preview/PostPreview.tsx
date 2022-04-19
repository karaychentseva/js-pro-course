import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import PostType from "../../types/PostType";
import "./PostPreview.scss";

type PropsType = {
    data: PostType
}


const PostPreview: React.FC<PropsType> = ({data}) => {
    const navigate = useNavigate();
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

    const handleClick = () => {
        navigate(`/posts/${data.id}`, {
            state: {st: 12}
        });
    }

    return (
        <div className="post">
            <div className="post__img" onClick={handleClick}>
                {image}
            </div>
            <Link to={`/posts/${data.id}`} >
                <h3 className="post__title">{data.title}</h3>
            </Link>
            
            <p className="post__text">{data.text}</p>
            <span className="post__date">{data.date}</span>
        </div>
    )
}

export default PostPreview;
