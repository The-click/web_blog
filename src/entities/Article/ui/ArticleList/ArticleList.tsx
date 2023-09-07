import { HTMLAttributeAnchorTarget, memo } from "react";
import { useTranslation } from "react-i18next";
import { List, ListRowProps, WindowScroller } from "react-virtualized";
import { classNames } from "shared/lib/classNames/classNames";
import { PAGE_ID } from "shared/ui/Page/Page";
import { Text } from "shared/ui/Text/Text";
import { Article, ArticleView } from "../../model/type/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import cls from "./ArticleList.module.scss";

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    virtualized?: boolean;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                className={cls.card}
                key={index}
                view={view}
            />
        ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className = "",
        articles,
        view = ArticleView.SMALL,
        isLoading,
        target,
        virtualized = true,
    } = props;
    const { t } = useTranslation("article");

    const isBig = view === ArticleView.BIG;
    const itemsPerRow = isBig
        ? 1
        : Math.trunc(
              (document.getElementById(PAGE_ID)?.clientWidth || 1000) / 260
          );
    const rowCount = isBig
        ? articles.length
        : Math.ceil(articles.length / itemsPerRow);

    const rowRender = ({
        index,
        isScrolling,
        isVisible,
        key,
        style,
    }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    article={articles[index]}
                    view={view}
                    className={cls.card}
                    target={target}
                    key={`${articles[index].id} ${i}`}
                />
            );
        }

        return (
            <div
                key={key}
                className={classNames(className, {}, [cls.row])}
                style={style}
            >
                {items}
            </div>
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.articleList, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Text title={t("Articles is not find")} />
            </div>
        );
    }

    return (
        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                width,
                height,
                registerChild,
                scrollTop,
                onChildScroll,
                isScrolling,
            }) => (
                <div
                    ref={registerChild}
                    className={classNames(cls.articleList, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    {virtualized ? (
                        <List
                            height={height ?? 700}
                            width={width ? width - 80 : 700}
                            className={cls.List}
                            rowCount={rowCount}
                            rowHeight={isBig ? 700 : 330}
                            rowRenderer={rowRender}
                            autoHeight
                            scrollTop={scrollTop}
                            isScrolling={isScrolling}
                            onScroll={onChildScroll}
                        />
                    ) : (
                        articles.map((item) => (
                            <ArticleListItem
                                article={item}
                                view={view}
                                target={target}
                                key={item.id}
                                className={cls.card}
                            />
                        ))
                    )}

                    {isLoading && getSkeletons(view)}
                </div>
            )}
        </WindowScroller>
    );
});
