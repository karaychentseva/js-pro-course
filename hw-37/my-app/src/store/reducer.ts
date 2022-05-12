import { combineReducers } from "redux";
import { clickerReducer } from "./clicker/reducer";
import { postReducer } from "./post/reducer";
import { postsReducer } from "./posts/postsSlice";
import { authReducer } from "./auth/authSlice";

const reducer = combineReducers({
    clicker: clickerReducer,
    post: postReducer,
    posts: postsReducer,
    auth: authReducer,
});

export default reducer;
