import { ArticleList, ArticleView } from "entities/Article";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { VStack } from "shared/ui/Stack";
import { Text, TextSize } from "shared/ui/Text/Text";
import { useArticleRecommendationsList } from "../../api/articleRecommendationApi";

interface ArticleRecommendationListProps {
    className?: string;
}

export const ArticleRecommendationList = memo(
    (props: ArticleRecommendationListProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const {
            isLoading,
            error,
            data: articles,
        } = useArticleRecommendationsList(3);

        if (isLoading || !articles) {
            return null;
        }
        return (
            <VStack gap="8" className={classNames("", {}, [className])}>
                <Text size={TextSize.L} title={t("Recommendations")} />
                <ArticleList
                    view={ArticleView.SMALL}
                    articles={articles}
                    target="_blank"
                />
            </VStack>
        );
    }
);
