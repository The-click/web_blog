import { DeepPartial } from "@reduxjs/toolkit";
import {
    Article,
    ArticleSortField,
    ArticleType,
    ArticleView,
} from "entities/Article";

import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from "shared/const/localStorage";
import { articlePageActions, articlePageReducer } from "./articlePageSlice";
import { ArticlePageSchema } from "../type/articlePageSchema";
import { fetchArticleList } from "../service/fetchArticleList/fetchArticleList";

const localStorageMock = (function () {
    let store: { [key: string]: string } = {
        [ARTICLE_VIEW_LOCALSTORAGE_KEY]: ArticleView.SMALL,
    };

    return {
        getItem(key: string) {
            return store[key];
        },

        setItem(key: string, value: string) {
            store[key] = value;
        },

        clear() {
            store = {};
        },

        removeItem(key: string) {
            delete store[key];
        },

        getAll() {
            return store;
        },
    };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

const data: DeepPartial<ArticlePageSchema> = {
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.BIG,
    page: 1,
    limit: 9,
    hasMore: true,
    _inited: false,
    search: "",
    sort: ArticleSortField.CREATED,
    order: "asc",
    type: ArticleType.ALL,
};

const articles: Article[] = [
    {
        id: "1",
        user: {
            id: "1",
            username: "admin",
            avatar: "https://www.soscanhelp.com/hubfs/Dark%20Web%20Hacker%20Blue%20Glow.jpeg",
        },
        title: "Java",
        subtitle: "Что нового в Java за 2022 год?",
        img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
        views: 1022,
        createdAt: "26.02.2022",
        type: [ArticleType.IT],
        blocks: [],
    },
    {
        id: "2",
        user: {
            id: "2",
            username: "user",
            avatar: "https://www.soscanhelp.com/hubfs/Dark%20Web%20Hacker%20Blue%20Glow.jpeg",
        },
        title: "Javascript news",
        subtitle: "Что нового в JS за 2022 год?",
        img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
        views: 1022,
        createdAt: "26.02.2022",
        type: [ArticleType.IT],
        blocks: [],
    },
];

describe("articlePageSlice", () => {
    test("should set page ", () => {
        const state: DeepPartial<ArticlePageSchema> = {
            page: 1,
        };
        expect(
            articlePageReducer(
                state as ArticlePageSchema,
                articlePageActions.setPage(2)
            )
        ).toEqual({ page: 2 });
    });
    test("should set view big", () => {
        const state: DeepPartial<ArticlePageSchema> = {
            view: ArticleView.BIG,
        };
        expect(
            articlePageReducer(
                state as ArticlePageSchema,
                articlePageActions.setView(ArticleView.SMALL)
            )
        ).toEqual({ view: ArticleView.SMALL });
    });
    test("should set order", () => {
        const state: DeepPartial<ArticlePageSchema> = {
            order: "asc",
        };
        expect(
            articlePageReducer(
                state as ArticlePageSchema,
                articlePageActions.setOrder("desc")
            )
        ).toEqual({ order: "desc" });
    });
    test("should set search", () => {
        const state: DeepPartial<ArticlePageSchema> = {
            search: "",
        };
        expect(
            articlePageReducer(
                state as ArticlePageSchema,
                articlePageActions.setSearch("text")
            )
        ).toEqual({ search: "text" });
    });
    test("should set sort", () => {
        const state: DeepPartial<ArticlePageSchema> = {
            sort: ArticleSortField.CREATED,
        };
        expect(
            articlePageReducer(
                state as ArticlePageSchema,
                articlePageActions.setSort(ArticleSortField.TITLE)
            )
        ).toEqual({ sort: ArticleSortField.TITLE });
    });
    test("should set type", () => {
        const state: DeepPartial<ArticlePageSchema> = {
            type: ArticleType.ALL,
        };
        expect(
            articlePageReducer(
                state as ArticlePageSchema,
                articlePageActions.setType(ArticleType.ECONOMICS)
            )
        ).toEqual({ type: ArticleType.ECONOMICS });
    });
    test("should initState", () => {
        const state: DeepPartial<ArticlePageSchema> = {
            view: ArticleView.BIG,
            limit: 4,
            _inited: false,
        };
        expect(
            articlePageReducer(
                state as ArticlePageSchema,
                articlePageActions.initState()
            )
        ).toEqual({
            view: ArticleView.SMALL,
            limit: 9,
            _inited: true,
        });
    });
    test("should initState", () => {
        const state: DeepPartial<ArticlePageSchema> = {
            view: ArticleView.BIG,
            limit: 4,
            _inited: false,
        };
        expect(
            articlePageReducer(
                state as ArticlePageSchema,
                articlePageActions.initState()
            )
        ).toEqual({
            view: ArticleView.SMALL,
            limit: 9,
            _inited: true,
        });
    });
    test("test update articlePageSlice service pending", () => {
        const state: DeepPartial<ArticlePageSchema> = {
            isLoading: false,
            error: "error",
        };
        expect(
            articlePageReducer(
                state as ArticlePageSchema,
                fetchArticleList.pending("", { replace: false })
            )
        ).toEqual({ isLoading: true, error: undefined });
    });
    test("test update articlePageSlice service fulfilled", () => {
        const state: DeepPartial<ArticlePageSchema> = {
            isLoading: true,
        };
        expect(
            articlePageReducer(
                state as ArticlePageSchema,
                fetchArticleList.fulfilled(articles, "", { replace: true })
            )
        ).toEqual({
            isLoading: false,
            ids: ["1", "2"],
            hasMore: false,
            entities: {
                "1": articles[0],
                "2": articles[1],
            },
        });
    });
});
