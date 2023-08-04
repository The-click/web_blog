import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import {
    getArticlesError,
    getArticlesIsLoading,
    getArticlesPageHasMore,
    getArticlesPageNum,
} from "../../selectors/articlePageSelectors";
import { articlePageActions } from "../../slice/articlePageSlice";
import { fetchArticleList } from "../fetchArticleList/fetchArticleList";

export const fetchNextArticlePage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>("pages/NextArticlePage", async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const hasMore = getArticlesPageHasMore(getState());
    const page = getArticlesPageNum(getState());
    const isLoading = getArticlesIsLoading(getState());
    // const error = getArticlesError(getState());

    if (hasMore && !isLoading) {
        dispatch(articlePageActions.setPage(page + 1));
        dispatch(fetchArticleList({ page: page + 1 }));
    }
});
