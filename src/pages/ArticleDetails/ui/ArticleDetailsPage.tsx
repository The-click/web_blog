import { ArticleDetails } from "entities/Article";
import { ArticleRecommendationList } from "features/articleRecommendationList";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Page } from "shared/ui/Page/Page";
import { VStack } from "shared/ui/Stack";
import { Text, TextSize } from "shared/ui/Text/Text";
import { articleDetailsPageReducer } from "../model/slice";
import { ArticleDetailsComments } from "./ArticleDetailsComments/ArticleDetailsComments";
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
                    <ArticleRecommendationList />
                    <Text
                        size={TextSize.L}
                        className={cls.commentTitle}
                        title={t("Comments")}
                    />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
