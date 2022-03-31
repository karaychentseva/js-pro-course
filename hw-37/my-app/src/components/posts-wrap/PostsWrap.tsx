import { PostType } from "../../types/PostType";
import Post from "../post/Post";
import "./PostsWrap.scss";



const data: PostType[] = [
    {
        "id": 1,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlF6XGdihjjJJwdE0612SVFhRBZUoR9ExrqA&usqp=CAU",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aperiam inventore quasi magni corporis quas?",
        "date": "2022-03-30",
        "lesson_num": 123,
        "title": "Post number 1",
        "author": 7
    },
    {
        "id": 2,
        "image": "https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, fuga consequuntur!",
        "date": "2022-03-31",
        "lesson_num": 48,
        "title": "Post number 2",
        "author": 7
    },
    {
        
        "id": 3,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjE7A3nMQWCKi8hZ0HqSMDOWHBGdcUWm8ziA&usqp=CAU",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "date": "2022-01-04",
        "lesson_num": 48,
        "title": "Post number 3",
        "author": 8
    },
];

type PropsType = {
    
}

const PostsWrap: React.FC<PropsType> = () => {

    const posts = data.map(post => <Post key={post.id} data={post} />);
    return (
        <div className="posts-wrap">
            {posts}
        </div>
    )
}

export default PostsWrap;