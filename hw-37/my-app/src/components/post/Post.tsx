import { PostType } from "../../types/PostType";
import "./Post.scss";

type PropsType = {
    data: PostType
}

const Post: React.FC<PropsType> = ({data}) => {

    return (
        <div className="post">
            
            <div className="post__img">
                {data.image && 
                    <img src={data.image} className='post__img-item'/>
                }   
                
            </div>
            <h3 className="post__title">{data.title}</h3>
            <p className="post__text">{data.text}</p>
            <span className="post__date">{data.date}</span>
        </div>
    )
}

export default Post;
