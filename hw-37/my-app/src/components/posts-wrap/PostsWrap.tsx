import { useEffect, useState } from "react";
import usePosts from "../../hooks/usePosts";
import PostsFilterType from "../../types/PostsFilterType";
import PostType from "../../types/PostType";
import PostPreview from "../post-preview/PostPreview";
import PostsFilter from "../posts-filter/PostsFilter";
import "./PostsWrap.scss";

const URL = "https://studapi.teachmeskills.by/blog/posts/?limit=50&offset=0";

type PropsType = {}

const PostsWrap: React.FC<PropsType> = () => {

    const [filter, setFilter] = useState<PostsFilterType>({
        page: 1,
        limit: 4,
    });
    const { data, loading, error } = usePosts(filter);

    const postComponents = data.results
        .map(post => <PostPreview key={post.id} data={post} />);

    return (
        <div>
            <PostsFilter count={data.count} filter={filter} setFilter={setFilter} />
            <div className="posts-wrap">
                
                { postComponents }
                { loading && "Loading..." }
                { error && "Error :(" }
            </div>
        </div>
    )
}

export default PostsWrap;