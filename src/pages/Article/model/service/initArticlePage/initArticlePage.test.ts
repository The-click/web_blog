import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchArticleList } from "../fetchArticleList/fetchArticleList";
import { initArticlePage } from "./initArticlePage";

jest.mock("../fetchArticleList/fetchArticleList");
describe("initArticlePage.test", () => {
    test("initArticlePage called ", async () => {
        const thunk = new TestAsyncThunk(initArticlePage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                _inited: false,
            },
        });

        const result = await thunk.callThunk(new URLSearchParams(""));

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticleList).toBeCalledWith({});
        expect(result.meta.requestStatus).toBe("fulfilled");
    });

    test("initArticlePage not called with _inited true", async () => {
        const thunk = new TestAsyncThunk(initArticlePage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
                _inited: true,
            },
        });

        const result = await thunk.callThunk(new URLSearchParams(""));

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticleList).not.toHaveBeenCalled();
    });
});
