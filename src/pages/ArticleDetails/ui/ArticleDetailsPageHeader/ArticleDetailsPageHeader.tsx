import { getArticleDetailsData } from "entities/Article";
import { getUserAuthData } from "entities/User";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routerConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { HStack } from "shared/ui/Stack";
import { getCanEditArticle } from "../../model/selectors/article";

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(
    (props: ArticleDetailsPageHeaderProps) => {
        const { className } = props;
        const { t } = useTranslation("article");
        const navigate = useNavigate();
        const userData = useSelector(getUserAuthData);
        const article = useSelector(getArticleDetailsData);
        const canEdit = useSelector(getCanEditArticle);
        const onBackToList = useCallback(() => {
            navigate(RoutePath.article);
        }, [navigate]);

        const onEditArticle = useCallback(() => {
            navigate(`${RoutePath.article}/${article?.id}/edit`);
        }, [navigate, article]);
        return (
            <HStack
                max
                justify="between"
                className={classNames("", {}, [className])}
            >
                <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
                    {t("Back to list")}
                </Button>
                {canEdit && (
                    <Button theme={ThemeButton.OUTLINE} onClick={onEditArticle}>
                        {t("Edit")}
                    </Button>
                )}
            </HStack>
        );
    }
);
