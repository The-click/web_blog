import React, { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { ArticleDetails, ArticleList, ArticleView } from "entities/Article";
import { Text, TextSize } from "shared/ui/Text/Text";
import { CommentList } from "entities/Comment";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useDispatch, useSelector } from "react-redux";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { AddCommentForm } from "features/AddCommentForm";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/routerConfig/routeConfig";
import { Page } from "shared/ui/Page/Page";
import {
    articleDetailsCommentReducer,
    getArticleComments,
} from "../model/slice/articleDetailsCommentSlice";
import cls from "./ArticleDetailsPage.module.scss";
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading,
} from "../model/selectors/comments/comments";
import { fetchCommentArticleById } from "../model/service/fetchCommentArticleById";
import { addCommentForArticle } from "../model/service/addCommentForArticle/addCommentForArticle";
import {
    articleDetailsPageRecommendationsReducer,
    getArticleRecommendations,
} from "../model/slice/articleDetailsPageRecommendationsSlice";
import { getArticleRecommendationIsLoading } from "../model/selectors/comments/recommendation";
import { fetchArticleRecommendation } from "../model/service/fetchArticleRecommendation/fetchArticleRecommendation";

interface ArticleDetailsProps {
    className?: string;
}
const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentReducer,
    articleDetailsPageRecommendations: articleDetailsPageRecommendationsReducer,
};
const ArticleDetailsPage = (props: ArticleDetailsProps) => {
    const { className } = props;
    const { t } = useTranslation("article");
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

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

    const onBackToList = useCallback(() => {
        navigate(RoutePath.article);
    }, [navigate]);

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
                <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
                    {t("Back to list")}
                </Button>
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
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
