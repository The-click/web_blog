import React, { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import {
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
import { useSearchParams } from "react-router-dom";
import {
    articlePageActions,
    articlePageReducer,
    getArticles,
} from "../model/slice/articlePageSlice";
import cls from "./ArticlePage.module.scss";
import {
    getArticlesError,
    getArticlesIsLoading,
    getArticlesViews,
} from "../model/selectors/articlePageSelectors";
import { fetchNextArticlePage } from "../model/service/fetchNextArticlePage/fetchNextArticlePage";
import { initArticlePage } from "../model/service/initArticlePage/initArticlePage";
import { ArticlesPageFilters } from "./ArticlesPageFilters/ArticlesPageFilters";

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
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlePage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount={false}>
            <Page
                onScrollEnd={!isLoading ? onLoadNextPart : undefined}
                className={classNames(cls.ArticlePage, {}, [className])}
            >
                <ArticlesPageFilters />
                <ArticleList
                    articles={articles}
                    view={view}
                    isLoading={isLoading}
                    className={cls.list}
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
