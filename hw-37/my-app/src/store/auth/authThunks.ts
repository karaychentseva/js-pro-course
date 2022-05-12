import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../helpers/api';
import FormValuesType from '../../types/FormValuesType';
import ProfileType from '../../types/ProfileType';

const URL = "https://studapi.teachmeskills.by/auth/jwt/create/";

type TokensType = {
    access: string,
    refresh: string,
}

export const createTokens = createAsyncThunk<TokensType, FormValuesType>(
    "auth/createTokens",
    async (data) => {
        const URL = "auth/jwt/create/";
        const response = await api.post(URL, data);
        return response.data as TokensType;
    }
)

export const fetchProfile = createAsyncThunk<ProfileType>(
    "auth/fetchProfile",
    async (_, thunkApi) => {
        const URL = "auth/users/me/";
        const response = await api.get(URL, undefined, true, thunkApi.dispatch);
        return response.data as ProfileType;
    }
)