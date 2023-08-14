import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading,
} from "./comments";

describe("Article details page selectors: getArticleCommentsError", () => {
    test("should return error text", () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: {
                    error: "error",
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
                },
                recommendations: {
                    ids: [],
                    entities: {},
                },
            },
        };

        expect(getArticleCommentsError(state as StateSchema)).toEqual(
            state.articleDetailsPage?.comments.error
        );
    });
    test("should return with empty state", () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: {
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
                },
                recommendations: {
                    ids: [],
                    entities: {},
                },
            },
        };

        expect(getArticleCommentsError(state as StateSchema)).toEqual(
            undefined
        );
    });
});

describe("Article details page selectors: getArticleCommentsIsLoading", () => {
    test("should return loading state true", () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: {
                    isLoading: true,
                    error: "error",
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
                },
                recommendations: {
                    ids: [],
                    entities: {},
                },
            },
        };

        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(
            state.articleDetailsPage?.comments.isLoading
        );
    });
    test("should return loading state false", () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: {
                    isLoading: false,
                    error: "error",
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
                },
                recommendations: {
                    ids: [],
                    entities: {},
                },
            },
        };

        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(
            state.articleDetailsPage?.comments?.isLoading
        );
    });
    test("should return with empty state", () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: {
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
                },
                recommendations: {
                    ids: [],
                    entities: {},
                },
            },
        };

        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(
            undefined
        );
    });
});
