import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "../type/article";

export const fetchArticleById = createAsyncThunk<
    Article,
    string,
    ThunkConfig<string>
>("articles/articleDetails", async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
        const response = await extra.api.get<Article>(
            `/articles/${articleId}`,
            {
                params: { _expand: "user" },
            }
        );

        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (err) {
        console.log(err);
        return rejectWithValue("error");
    }
});
