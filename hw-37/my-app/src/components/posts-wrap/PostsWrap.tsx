import React, { useEffect, useReducer } from 'react';
import PostPreview from "../post-preview/PostPreview";
import PostsFilter from "../posts-filter/PostsFilter";
import "./PostsWrap.scss";
import { initialState, PostsFilterReducer } from '../posts-filter/PostsFilterReducer';

import { useSelector } from "../../hooks/useSelector";
import { useActions } from '../../hooks/useActions';

type PropsType = {}

const PostsWrap: React.FC<PropsType> = () => {

    const [state, dispatch] = useReducer(PostsFilterReducer, initialState);
    const { fetchPosts } = useActions();
    
    const data = useSelector(state  => state.posts.data);
    const count = useSelector(state  => state.posts.count);
    const loading = useSelector(state  => state.posts.loading);
    const error = useSelector(state  => state.posts.error);

    useEffect(() => {
        fetchPosts(state);
    }, [state])

    const postComponents = data.map(post => <PostPreview key={post.id} data={post} />);

    return (
        <div>
            <PostsFilter
                count={count}
                state={state}
                dispatch={dispatch}
            />
            <div className="posts-wrap">
                
                { postComponents }
                { loading && "Loading..." }
                { error }
            </div>
        </div>
    )
}

export default PostsWrap;