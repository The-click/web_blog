import React, { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import {
    Article,
    ArticleList,
    ArticleView,
    ArticleViewSelector,
} from "entities/Article";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useSelector } from "react-redux";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Page } from "shared/ui/Page/Page";
import { Text, TextTheme } from "shared/ui/Text/Text";
import {
    articlePageActions,
    articlePageReducer,
    getArticles,
} from "../model/slice/articlePageSlice";
import { fetchArticleList } from "../model/service/fetchArticleList/fetchArticleList";
import cls from "./ArticlePage.module.scss";
import {
    getArticlesError,
    getArticlesIsLoading,
    getArticlesPageHasMore,
    getArticlesPageNum,
    getArticlesViews,
} from "../model/selectors/articlePageSelectors";
import { fetchNextArticlePage } from "../model/service/fetchNextArticlePage/fetchNextArticlePage";

interface ArticlePageProps {
    className?: string;
}

const reducer: ReducersList = {
    articlesPage: articlePageReducer,
};

const ArticlePage = (props: ArticlePageProps) => {
    const { className } = props;
    const { t } = useTranslation("article");
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesIsLoading);
    const error = useSelector(getArticlesError);
    const view = useSelector(getArticlesViews);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(articlePageActions.initState());
        dispatch(fetchArticleList({ page: 1 }));
    });

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlePageActions.setView(view));
        },
        [dispatch]
    );

    return (
        <DynamicModuleLoader reducers={reducer}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlePage, {}, [className])}
            >
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    articles={articles}
                    view={view}
                    isLoading={isLoading}
                />
                {error && (
                    <Text
                        title={t("Failed to upload articles")}
                        theme={TextTheme.ERROR}
                    />
                )}
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlePage);
