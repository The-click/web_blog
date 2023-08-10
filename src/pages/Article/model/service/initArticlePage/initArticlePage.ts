import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { SortOrder } from "shared/types";
import { ArticleSortField, ArticleType } from "entities/Article";
import { articlePageActions } from "../../slice/articlePageSlice";
import { getArticlesPageInitied } from "../../selectors/articlePageSelectors";
import { fetchArticleList } from "../fetchArticleList/fetchArticleList";

export const initArticlePage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>("pages/initArticlePage", async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const inited = getArticlesPageInitied(getState());
    if (!inited) {
        const orderFromUrl = searchParams.get("order") as SortOrder;
        const sortFromUrl = searchParams.get("sort") as ArticleSortField;
        const searchFromUrl = searchParams.get("search");
        const typeFromUrl = searchParams.get("type") as ArticleType;

        if (orderFromUrl) {
            dispatch(articlePageActions.setOrder(orderFromUrl));
        }
        if (sortFromUrl) {
            dispatch(articlePageActions.setSort(sortFromUrl));
        }
        if (searchFromUrl) {
            dispatch(articlePageActions.setSearch(searchFromUrl));
        }
        if (typeFromUrl) {
            dispatch(articlePageActions.setType(typeFromUrl));
        }

        dispatch(articlePageActions.initState());
        dispatch(fetchArticleList({}));
    }
});
