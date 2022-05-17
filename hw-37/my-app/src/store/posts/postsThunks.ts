import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../helpers/api';
import PostsFilterType from "../../components/posts-filter/PostsFilterTypes"
import PostType from "../../types/PostType";

type FetchPostsType = {
    data: PostType[],
    count: number,
}

export const fetchPosts = createAsyncThunk<FetchPostsType, PostsFilterType, { rejectValue: string }>(
    "posts/fetchPosts",
    async ({ page, limit, ordering, author, lesson_num }, thunkApi) => {

        const offset = limit * (page - 1);
        let url = `blog/posts?limit=${limit}&offset=${offset}&ordering=${ordering}`;
        if (author) {
            url += `&author=${author}`;
        }
        if (lesson_num) {
            url += `&lesson_num=${lesson_num}`;
        }

        try {
            const response = await api.get(url);
            return {
                data: response.data.results as PostType[],
                count: response.data.count as number,
            }
        } catch {
            return thunkApi.rejectWithValue("Server error!!!");
        }
    }
)
