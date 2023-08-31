import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { SortOrder } from "shared/types";
import { Select, SelectOptions } from "shared/ui/Select/Select";
import { ArticleSortField } from "../../model/type/article";
import cls from "./ArticleSortSelect.module.scss";

interface ArticleSortSelectProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newOrder: ArticleSortField) => void;
}

export const ArticleSortSelect = memo((props: ArticleSortSelectProps) => {
    const { className, sort, order, onChangeOrder, onChangeSort } = props;
    const { t } = useTranslation("article");

    const orderOptions = useMemo<SelectOptions<SortOrder>[]>(
        () => [
            {
                value: "asc",
                content: t("Ascending"),
            },
            {
                value: "desc",
                content: t("Descending"),
            },
        ],
        [t]
    );
    const sortFieldOptions = useMemo<SelectOptions<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t("Date"),
            },
            {
                value: ArticleSortField.TITLE,
                content: t("Title"),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t("Views"),
            },
        ],
        [t]
    );

    return (
        <div className={classNames(cls.ArticleSortSelect, {}, [className])}>
            <Select
                value={sort}
                onChange={onChangeSort}
                options={sortFieldOptions}
                label={t("Sort by")}
            />
            <Select
                value={order}
                onChange={onChangeOrder}
                options={orderOptions}
                label={t("By")}
                className={cls.order}
            />
        </div>
    );
});
