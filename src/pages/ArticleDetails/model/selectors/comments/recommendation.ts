import { StateSchema } from "app/providers/StoreProvider";

export const getArticleRecommendationError = (state: StateSchema) =>
    state.articleDetailsPage?.recommendations?.error;
export const getArticleRecommendationIsLoading = (state: StateSchema) =>
    state.articleDetailsPage?.recommendations?.isLoading;
