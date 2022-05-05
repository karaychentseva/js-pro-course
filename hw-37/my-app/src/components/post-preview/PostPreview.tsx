import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import PostType from "../../types/PostType";
import { ReactComponent as LikeIcon } from "../../assets/heart-solid.svg";
import { ReactComponent as DislikeIcon } from "../../assets/heart-broken-solid.svg";
import { useActions } from '../../hooks/useActions';
import { useSelector } from '../../hooks/useSelector';
import "./PostPreview.scss";
import { PostGrade } from "../../enums/PostGrade";


type PropsType = {
    data: PostType
}


const PostPreview: React.FC<PropsType> = ({data}) => {
    const navigate = useNavigate();
    const [isError, setIsError] = useState(false);
    const { likePost, dislikePost } = useActions();
    const grades = useSelector(state => state.posts.grades);
    const isLiked = grades[data.id] === PostGrade.LIKE;
    const isDisliked = grades[data.id] === PostGrade.DISLIKE;
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

    const handleClickLike = () => likePost(data.id);
    const handleClickDislike = () => dislikePost(data.id);

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
            <div className="post__rating">
                <span className="post__rating_icon" onClick={handleClickLike}>
                    <LikeIcon className={`icon ${isLiked ? "_liked" : ""}`} />
                </span>
                <span className="post__rating_icon" onClick={handleClickDislike}>
                    <DislikeIcon className={`icon ${isDisliked ? "_disliked" : ""}`} />
                </span>
            </div>
        </div>
    )
}

export default PostPreview;
