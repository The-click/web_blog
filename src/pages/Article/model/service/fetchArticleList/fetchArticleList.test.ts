import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Article, ArticleType } from "entities/Article";
import { fetchArticleList } from "./fetchArticleList";

const data: Article[] = [
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
describe("fetchArticleList.test", () => {
    test("fetchArticleList called ", async () => {
        const thunk = new TestAsyncThunk(fetchArticleList, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        });
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk({});
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(result.meta.requestStatus).toBe("fulfilled");
    });
    test("fetchArticleList not called ", async () => {
        const thunk = new TestAsyncThunk(fetchArticleList);

        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({});
        expect(result.meta.requestStatus).toBe("rejected");
    });
});
