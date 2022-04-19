import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import PostType from '../../types/PostType';
import PostPreview from '../post-preview/PostPreview';

type PropsType = {
}

const URL = "https://studapi.teachmeskills.by/blog/posts/";

const Post: React.FC<PropsType> = () => {
    const [post, setPost] = useState<PostType>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const { id } = useParams();
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        setLoading(true);
        setTimeout(() => {
            fetch(`${URL}${id}`)
                .then((response) => response.json())
                .then((data) => {
                    const post = data as PostType;
                    setPost(post);
                })
                .catch(() => {
                    setError(true);
                })
                .finally(() => {
                    setLoading(false);
                })
        }, 0);
    }

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
    } else if (post) {
        return (
            <PostPreview data={post} />
        )
    }

    return null;


}

export default Post; 