import { DeepPartial } from "@reduxjs/toolkit";
import { Comment } from "entities/Comment";
import { ArticleDetailsCommentSchema } from "../type/ArticleDetailsCommentSchema";
import { articleDetailsCommentReducer } from "./articleDetailsCommentSlice";
import { fetchCommentArticleById } from "../service/fetchCommentArticleById";

const data: Comment[] = [
    {
        id: "1",
        text: "some comment",
        user: {
            id: "2",
            username: "name2",
        },
    },
    {
        id: "2",
        text: "some comment 2",
        user: {
            id: "1",
            username: "name",
        },
    },
];
describe("articleDetailsCommentSlice", () => {
    test("test update articleDetailsCommentSlice service pending", () => {
        const state: DeepPartial<ArticleDetailsCommentSchema> = {
            isLoading: false,
            error: "error",
        };
        expect(
            articleDetailsCommentReducer(
                state as ArticleDetailsCommentSchema,
                fetchCommentArticleById.pending
            )
        ).toEqual({ isLoading: true, error: undefined });
    });
    test("test update articleDetailsCommentSlice.test service fulfilled", () => {
        const state: DeepPartial<ArticleDetailsCommentSchema> = {
            isLoading: true,
        };

        const compileData = {
            entities: {
                "1": {
                    id: "1",
                    text: "some comment",
                    user: {
                        id: "2",
                        username: "name2",
                    },
                },
                "2": {
                    id: "2",
                    text: "some comment 2",
                    user: {
                        id: "1",
                        username: "name",
                    },
                },
            },
            ids: ["1", "2"],
        };

        expect(
            articleDetailsCommentReducer(
                state as ArticleDetailsCommentSchema,
                fetchCommentArticleById.fulfilled(data, "", "")
            )
        ).toEqual({
            isLoading: false,
            ...compileData,
        });
    });
});
