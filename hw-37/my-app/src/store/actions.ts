import * as clickerActions from "./clicker/actionCreators";
import * as postActions from "./post/actionCreators";
import { postsActions } from "./posts/postsSlice";
import { authActions } from "./auth/authSlice";

const actions = {
    ...clickerActions,
    ...postActions,
    ...postsActions,
    ...authActions,
};

export default actions;