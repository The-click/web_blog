import {
    ArticleSortField,
    ArticleSortSelect,
    ArticleType,
    ArticleTypeTabs,
    ArticleView,
    ArticleViewSelector,
} from "entities/Article";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { SortOrder } from "shared/types";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/Input";
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesViews,
} from "../../model/selectors/articlePageSelectors";
import { fetchArticleList } from "../../model/service/fetchArticleList/fetchArticleList";
import { articlePageActions } from "../../model/slice/articlePageSlice";
import cls from "./ArticlesPageFilters.module.scss";

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation("article");
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesViews);
    const order = useSelector(getArticlesPageOrder);
    const sort = useSelector(getArticlesPageSort);
    const search = useSelector(getArticlesPageSearch);
    const typeValue = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticleList({ replace: true }));
    }, [dispatch]);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlePageActions.setView(view));
        },
        [dispatch]
    );

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeOrder = useCallback(
        (order: SortOrder) => {
            dispatch(articlePageActions.setOrder(order));
            dispatch(articlePageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData]
    );
    const onChangeSort = useCallback(
        (sort: ArticleSortField) => {
            dispatch(articlePageActions.setSort(sort));
            dispatch(articlePageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData]
    );
    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlePageActions.setSearch(search));
            dispatch(articlePageActions.setPage(1));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData]
    );
    const onChangeType = useCallback(
        (value: ArticleType) => {
            dispatch(articlePageActions.setType(value));
            dispatch(articlePageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData]
    );

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelect
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>

            <Card className={cls.search}>
                <Input
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t("Search")}
                />
            </Card>
            <ArticleTypeTabs
                className={cls.tabs}
                value={typeValue}
                onChangeType={onChangeType}
            />
        </div>
    );
});
