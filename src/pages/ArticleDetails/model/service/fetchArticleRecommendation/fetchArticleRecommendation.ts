import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article, ArticleType } from "entities/Article";
import { addQueryParams } from "shared/lib/url/addQueryParams/addQueryParams";

export const fetchArticleRecommendation = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
>("pages/ArticleRecommendation", async (props, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;
    try {
        const response = await extra.api.get<Article[]>(`/articles`, {
            params: {
                _expand: "user",
                _limit: 4,
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
