import { useParams } from 'react-router-dom';
import usePost from '../../hooks/usePost';
import PostPreview from '../post-preview/PostPreview';

type PropsType = {
}

const URL = "https://studapi.teachmeskills.by/blog/posts/";

const Post: React.FC<PropsType> = () => {
    const { id } = useParams();
    const { data, loading, error } = usePost(id);
    
    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    } else if (error) {
        return (
            <div>
                Error...
            </div>
        )
    } else if (data) {
        return (
            <PostPreview data={data} />
        )
    }

    return null;


}

export default Post; 