import {
    PayloadAction,
    createEntityAdapter,
    createSlice,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";

import { Comment } from "entities/Comment";
import { ArticleDetailsCommentSchema } from "../type/ArticleDetailsCommentSchema";
import { fetchCommentArticleById } from "../service/fetchCommentArticleById";

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
);
const articleDetailsCommentSlice = createSlice({
    name: "articleDetailsCommentSlice",
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
        isLoading: false,
        error: undefined,
        ids: ["1", "2"],
        entities: {
            "1": {
                id: "1",
                text: "comment",
                user: { id: "1", username: "1" },
            },
            "2": {
                id: "2",
                text: "comment",
                user: { id: "2", username: "2" },
            },
        },
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentArticleById.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchCommentArticleById.fulfilled,
                (state, action: PayloadAction<Comment[]>) => {
                    state.isLoading = false;
                    commentsAdapter.setAll(state, action.payload);
                }
            )
            .addCase(fetchCommentArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsCommentReducer } =
    articleDetailsCommentSlice;
