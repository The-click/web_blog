export { ArticleViewSelector } from "./ui/ArticleViewSelector/ArticleViewSelector";

export { ArticleDetails } from "./ui/ArticleDetails/ArticleDetails";

export type { Article } from "./model/type/article";
export { ArticleView } from "./model/type/article";

export { ArticleDetailsSchema } from "./model/type/articleDetailsSchema";

export {
    getArticleDetailsData,
    getArticleDetailsIsLoading,
    getArticleDetailsError,
} from "./model/selectors/articleDetails";

export { ArticleList } from "./ui/ArticleList/ArticleList";
