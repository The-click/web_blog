import axios from "axios";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Article } from "entities/Article";
import { ArticleType } from "entities/Article/model/type/article";
import { addCommentForArticle } from "./addCommentForArticle";
import { fetchCommentArticleById } from "../fetchCommentArticleById";

const articleData: Article = {
    id: "1",
    user: {
        id: "1",
        username: "admin",
        avatar: "https://www.soscanhelp.com/hubfs/Dark%20Web%20Hacker%20Blue%20Glow.jpeg",
    },
    title: "Javascript news",
    subtitle: "Что нового в JS за 2022 год?",
    img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
    views: 1022,
    createdAt: "26.02.2022",
    type: [ArticleType.IT],
    blocks: [],
};

const bodyPostQuery = {
    user: { authData: { id: "1", username: "username1" } },
    articleDetails: { data: articleData },
};
describe("addCommentForArticle", () => {
    test("success post query", async () => {
        const newComment = "newComment";

        const thunk = new TestAsyncThunk(addCommentForArticle, bodyPostQuery);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: newComment }));

        const result = await thunk.callThunk("newComment");
        // ToDo
        // expect(thunk.dispatch).toHaveBeenCalledWith(
        //     fetchCommentArticleById(articleData.id)
        // );
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(newComment);
    });

    test("error post query", async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, bodyPostQuery);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk("newComment");

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("error");
    });
});
