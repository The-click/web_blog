import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { ArticleType } from "../../model/type/article";

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation();

    const typeTabes = useMemo<TabItem[]>(
        () => [
            { value: ArticleType.ECONOMICS, content: t("Economic") },
            { value: ArticleType.ALL, content: t("All") },
            { value: ArticleType.IT, content: t("IT") },
            { value: ArticleType.SCIENCE, content: t("Science") },
        ],
        [t]
    );
    const onTabClick = useCallback(
        (tab: TabItem) => {
            onChangeType(tab.value as ArticleType);
        },
        [onChangeType]
    );

    return (
        <Tabs
            className={classNames("", {}, [className])}
            tabs={typeTabes}
            value={value}
            onTabClick={onTabClick}
        />
    );
});
