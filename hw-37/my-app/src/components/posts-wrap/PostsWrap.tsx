import usePosts from "../../hooks/usePosts";
import React, {useReducer } from 'react';
import PostPreview from "../post-preview/PostPreview";
import PostsFilter from "../posts-filter/PostsFilter";
import "./PostsWrap.scss";
import { initialState, PostsFilterReducer } from '../posts-filter/PostsFilterReducer';


type PropsType = {}

const PostsWrap: React.FC<PropsType> = () => {

    const [state, dispatch] = useReducer(PostsFilterReducer, initialState);
    const { data, loading, error } = usePosts(state);

    const postComponents = data.results
        .map(post => <PostPreview key={post.id} data={post} />);

    return (
        <div>
            <PostsFilter
                count={data.count}
                state={state}
                dispatch={dispatch}
            />
            <div className="posts-wrap">
                
                { postComponents }
                { loading && "Loading..." }
                { error && "Error :(" }
            </div>
        </div>
    )
}

export default PostsWrap;