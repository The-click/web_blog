import { ArticleDetails, ArticleList, ArticleView } from "entities/Article";
import { CommentList } from "entities/Comment";
import { AddCommentForm } from "features/AddCommentForm";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Page } from "shared/ui/Page/Page";
import { VStack } from "shared/ui/Stack";
import { Text, TextSize } from "shared/ui/Text/Text";
import { getArticleCommentsIsLoading } from "../model/selectors/comments";
import { getArticleRecommendationIsLoading } from "../model/selectors/recommendation";
import { addCommentForArticle } from "../model/service/addCommentForArticle/addCommentForArticle";
import { fetchArticleRecommendation } from "../model/service/fetchArticleRecommendation/fetchArticleRecommendation";
import { fetchCommentArticleById } from "../model/service/fetchCommentArticleById";
import { articleDetailsPageReducer } from "../model/slice";
import { getArticleComments } from "../model/slice/articleDetailsCommentSlice";
import { getArticleRecommendations } from "../model/slice/articleDetailsPageRecommendationsSlice";
import cls from "./ArticleDetailsPage.module.scss";
import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader/ArticleDetailsPageHeader";

interface ArticleDetailsProps {
    className?: string;
}
const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};
const ArticleDetailsPage = (props: ArticleDetailsProps) => {
    const { className } = props;
    const { t } = useTranslation("article");
    const { id } = useParams<{ id: string }>();

    const dispatch = useDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const recommendation = useSelector(getArticleRecommendations.selectAll);
    const recommendationIsLoading = useSelector(
        getArticleRecommendationIsLoading
    );

    const onSendComment = useCallback(
        (text) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch]
    );

    useInitialEffect(() => {
        dispatch(fetchCommentArticleById(id));
        dispatch(fetchArticleRecommendation());
    });

    if (!id) {
        return (
            <div
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                {t("Article is not found")}
            </div>
        );
    }
    return (
        <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
            <Page
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                <VStack gap="16">
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <Text
                        size={TextSize.L}
                        className={cls.commentTitle}
                        title={t("Recommendations")}
                    />
                    <ArticleList
                        view={ArticleView.SMALL}
                        articles={recommendation}
                        className={cls.recommendation}
                        target="_blank"
                    />
                    <Text
                        size={TextSize.L}
                        className={cls.commentTitle}
                        title={t("Comments")}
                    />
                    <AddCommentForm onSendComment={onSendComment} />
                    <CommentList
                        comments={comments}
                        isLoading={commentsIsLoading}
                    />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
