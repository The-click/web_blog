import { StateSchema } from "app/providers/StoreProvider";
import { ArticleSortField, ArticleType, ArticleView } from "entities/Article";

export const getArticlesError = (state: StateSchema) =>
    state.articlesPage?.error;
export const getArticlesIsLoading = (state: StateSchema) =>
    state.articlesPage?.isLoading;
export const getArticlesViews = (state: StateSchema) =>
    state.articlesPage?.view || ArticleView.SMALL;
export const getArticlesPageNum = (state: StateSchema) =>
    state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) =>
    state.articlesPage?.limit || 9;
export const getArticlesPageHasMore = (state: StateSchema) =>
    state.articlesPage?.hasMore;
export const getArticlesPageInitied = (state: StateSchema) =>
    state.articlesPage?._inited;
export const getArticlesPageOrder = (state: StateSchema) =>
    state.articlesPage?.order ?? "asc";
export const getArticlesPageSort = (state: StateSchema) =>
    state.articlesPage?.sort ?? ArticleSortField.CREATED;
export const getArticlesPageSearch = (state: StateSchema) =>
    state.articlesPage?.search ?? "";
export const getArticlesPageType = (state: StateSchema) =>
    state.articlesPage?.type ?? ArticleType.ALL;
