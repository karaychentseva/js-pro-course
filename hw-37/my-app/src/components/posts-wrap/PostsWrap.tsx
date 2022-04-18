import { useEffect, useState } from "react";
import PostType from "../../types/PostType";
import PostPreview from "../post-preview/PostPreview";
import "./PostsWrap.scss";

const URL = "https://studapi.teachmeskills.by/blog/posts/?limit=50&offset=0";

type PropsType = {}

const PostsWrap: React.FC<PropsType> = () => {

    const [posts, setPosts] = useState<PostType[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(fetchData, 500);        
    }, []);

    const fetchData = () => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                const posts = data.results as PostType[];
                setPosts(posts);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const postComponents = posts.map(post => <PostPreview key={post.id} data={post} />);

    return (
        <div className="posts-wrap">
            { postComponents }
            { loading && "Loading..." }
            { error && "Error :(" }
        </div>
    )
}

export default PostsWrap;