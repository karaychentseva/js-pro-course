import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { PostGrade } from "../../enums/PostGrade";
import Storage from "../../helpers/Storage";
import PostType from "../../types/PostType"
import { fetchPosts } from "./postsThunks";

type GradesType = {
    [prop: number]: PostGrade
}

type StoreType = {
    data: PostType[],
    count: number,
    grades: GradesType,
    bookmarks: number[],
    loading: boolean,
    error?: string,
}

const initialState: StoreType = {
    data: [],
    count: 0,
    loading: false,
    grades: Storage.get("grades", {}),
    bookmarks: Storage.get("bookmarks", []),
}

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        likePost: (state, { payload: postId }: PayloadAction<number>) => {
            if (state.grades[postId] === PostGrade.LIKE) {
                delete state.grades[postId];
            } else {
                state.grades[postId] = PostGrade.LIKE;
            }

            Storage.set("grades", state.grades);
        },
        dislikePost: (state, { payload: postId }: PayloadAction<number>) => {
            if (state.grades[postId] === PostGrade.DISLIKE) {
                delete state.grades[postId];
            } else {
                state.grades[postId] = PostGrade.DISLIKE;
            }

            Storage.set("grades", state.grades);
        },
        bookmarkPost: (state, { payload: postId }: PayloadAction<number>) => {
            if (state.bookmarks.includes(postId)) {
                state.bookmarks = state.bookmarks.filter(id => id !== postId);
            } else {
                state.bookmarks.push(postId);
            }

            Storage.set("bookmarks", state.bookmarks);
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.loading = true;
            state.error = undefined;
            state.data = [];
        });

        builder.addCase(fetchPosts.rejected, (state, { payload } ) => {
            state.loading = false;
            state.error = payload;
        });

        builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.data = payload.data;
            state.count = payload.count;
        });
    }
});

export const postsReducer = postsSlice.reducer;
export const postsActions = {
    ...postsSlice.actions,
    fetchPosts,
};