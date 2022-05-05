import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useSelector } from '../../hooks/useSelector';
import PostPreview from '../post-preview/PostPreview';

type PropsType = {
}

const URL = "https://studapi.teachmeskills.by/blog/posts/";

const Post: React.FC<PropsType> = () => {
    const { id } = useParams();
    const data = useSelector(state => state.post.data);
    const loading = useSelector(state => state.post.loading);
    const error = useSelector(state => state.post.error);

    const { fetchPost } = useActions();

    useEffect(() => {
        fetchPost(id);
    }, [id]);
    
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