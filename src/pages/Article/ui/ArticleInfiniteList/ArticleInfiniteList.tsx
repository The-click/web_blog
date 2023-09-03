import { ArticleList } from "entities/Article";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Text, TextTheme } from "shared/ui/Text/Text";
import {
    getArticlesError,
    getArticlesIsLoading,
    getArticlesViews,
} from "../../model/selectors/articlePageSelectors";
import { getArticles } from "../../model/slice/articlePageSlice";

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className } = props;
    const { t } = useTranslation("article");
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesIsLoading);
    const error = useSelector(getArticlesError);
    const view = useSelector(getArticlesViews);

    if (error) {
        return (
            <Text
                title={t("Failed to upload articles")}
                theme={TextTheme.ERROR}
            />
        );
    }

    return (
        <ArticleList
            articles={articles}
            view={view}
            isLoading={isLoading}
            className={className}
        />
    );
});
