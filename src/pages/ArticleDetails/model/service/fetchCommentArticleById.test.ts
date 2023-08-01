import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchCommentArticleById } from "./fetchCommentArticleById";

const comments = [
    {
        id: "1",
        text: "some comment",
        articleId: "1",
        userId: "1",
    },
    {
        id: "2",
        text: "some comment 2",
        articleId: "1",
        userId: "1",
    },
    {
        id: "3",
        text: "some comment 3",
        articleId: "1",
        userId: "2",
    },
    {
        articleId: "1",
        text: "lkjl;kj",
        userId: "1",
        id: "PBWirp1",
    },
];

describe("fetchCommentArticleById", () => {
    test("success get query", async () => {
        const thunk = new TestAsyncThunk(fetchCommentArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: comments }));

        const result = await thunk.callThunk("1");
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(comments);
    });

    test("error without article id", async () => {
        const thunk = new TestAsyncThunk(fetchCommentArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk(undefined);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("Error. article id not send");
    });

    test("error get query", async () => {
        const thunk = new TestAsyncThunk(fetchCommentArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk("1");

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("error");
    });
});
