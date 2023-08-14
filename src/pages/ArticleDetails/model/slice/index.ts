import { combineReducers } from "@reduxjs/toolkit";
import { ArticleDetailsPageSchema } from "../type";
import { articleDetailsPageRecommendationsReducer } from "./articleDetailsPageRecommendationsSlice";
import { articleDetailsCommentReducer } from "./articleDetailsCommentSlice";

export const articleDetailsPageReducer =
    combineReducers<ArticleDetailsPageSchema>({
        recommendations: articleDetailsPageRecommendationsReducer,
        comments: articleDetailsCommentReducer,
    });
