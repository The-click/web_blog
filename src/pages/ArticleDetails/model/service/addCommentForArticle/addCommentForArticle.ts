import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Comment } from "entities/Comment";
import { getUserAuthData } from "entities/User";
import { getArticleDetailsData } from "entities/Article";

import { fetchCommentArticleById } from "../fetchCommentArticleById";

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>("addCommentForm/addCommentForArticle", async (text, thunkAPI) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkAPI;

    const userData = getUserAuthData(getState());

    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
        return rejectWithValue("no data");
    }
    try {
        const response = await extra.api.post<Comment>(`/comments`, {
            articleId: article.id,
            text,
            userId: userData.id,
        });

        if (!response.data) {
            throw new Error();
        }

        dispatch(fetchCommentArticleById(article.id));

        return response.data;
    } catch (err) {
        return rejectWithValue("error");
    }
});
