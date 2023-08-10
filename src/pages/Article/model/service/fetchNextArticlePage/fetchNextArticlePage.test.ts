import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchNextArticlePage } from "./fetchNextArticlePage";
import { fetchArticleList } from "../fetchArticleList/fetchArticleList";

jest.mock("../fetchArticleList/fetchArticleList");
describe("fetchNextArticlePage.test", () => {
    test("fetchNextArticlePage called ", async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        });

        const result = await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticleList).toBeCalledWith({});
        expect(result.meta.requestStatus).toBe("fulfilled");
    });

    test("fetchNextArticlePage not called with hasMore false", async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        });
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticleList).not.toHaveBeenCalled();
    });
    test("fetchNextArticlePage not called with isLoading false", async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: true,
                hasMore: true,
            },
        });
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticleList).not.toHaveBeenCalled();
    });
    // test("fetchNextArticlePage not called with error", async () => {
    //     const thunk = new TestAsyncThunk(fetchNextArticlePage, {
    //         articlesPage: {
    //             page: 2,
    //             ids: [],
    //             entities: {},
    //             limit: 5,
    //             isLoading: false,
    //             hasMore: true,
    //             error: "Error",
    //         },a
    //     });

    //     thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    //     const result = await thunk.callThunk();
    //     expect(thunk.dispatch).toBeCalledTimes(2);
    //     expect(fetchArticleList).not.toHaveBeenCalled();
    // });
});
