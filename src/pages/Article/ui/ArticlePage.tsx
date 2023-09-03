import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Page } from "shared/ui/Page/Page";
import { getArticlesIsLoading } from "../model/selectors/articlePageSelectors";
import { fetchNextArticlePage } from "../model/service/fetchNextArticlePage/fetchNextArticlePage";
import { initArticlePage } from "../model/service/initArticlePage/initArticlePage";
import { articlePageReducer } from "../model/slice/articlePageSlice";
import { ArticleInfiniteList } from "./ArticleInfiniteList/ArticleInfiniteList";
import cls from "./ArticlePage.module.scss";
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
    const isLoading = useSelector(getArticlesIsLoading);
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
                <ArticleInfiniteList className={cls.list} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlePage);
