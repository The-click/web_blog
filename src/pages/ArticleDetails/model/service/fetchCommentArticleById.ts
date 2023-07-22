import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Comment } from "entities/Comment";

export const fetchCommentArticleById = createAsyncThunk<
    Comment[],
    string | undefined,
    ThunkConfig<string>
>("pages/commentArticleById", async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    if (!articleId) {
        return rejectWithValue("error");
    }
    try {
        const response = await extra.api.get<Comment[]>(`/comments`, {
            params: {
                articleId,
                _expand: "user",
            },
        });

        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (err) {
        return rejectWithValue("error");
    }
});
