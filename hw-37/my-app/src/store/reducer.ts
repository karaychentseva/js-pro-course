import { combineReducers } from "redux";
import { clickerReducer } from "./clicker/reducer";
import { postReducer } from "./post/reducer";
import { postsReducer } from "./posts/postsSlice";

const reducer = combineReducers({
    clicker: clickerReducer,
    post: postReducer,
    posts: postsReducer,
});

export default reducer;
