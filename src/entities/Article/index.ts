export { ArticleDetails } from "./ui/ArticleDetails/ArticleDetails";

export type { Article } from "./model/type/article";

export { ArticleDetailsSchema } from "./model/type/articleDetailsSchema";

export {
    getArticleDetailsData,
    getArticleDetailsIsLoading,
    getArticleDetailsError,
} from "./model/selectors/articleDetails";
