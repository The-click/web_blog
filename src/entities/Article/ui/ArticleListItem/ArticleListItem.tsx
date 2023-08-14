import React, { HTMLAttributeAnchorTarget, memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Card } from "shared/ui/Card/Card";
import { Text } from "shared/ui/Text/Text";
import { Icon } from "shared/ui/Icon/Icon";
import EyeImg from "shared/assets/icon/ant-design_eye-outlined.svg";
import { useHover } from "shared/lib/hooks/useHover/useHover";
import { RoutePath } from "shared/config/routerConfig/routeConfig";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { useNavigate } from "react-router-dom";
import { AppLink } from "shared/ui/AppLink/AppLink";
import cls from "./ArticleListItem.module.scss";
import {
    Article,
    ArticleBlockType,
    ArticleTextBlock,
    ArticleView,
} from "../../model/type/article";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation("article");

    const types = <Text text={article.type.join(", ")} className={cls.types} />;

    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeImg} />
        </>
    );
    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT
        ) as ArticleTextBlock;
        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text
                            className={cls.username}
                            text={article.user.username}
                        />
                        <Text className={cls.date} text={article.createdAt} />
                    </div>
                    <Text className={cls.title} title={article.title} />
                    {types}
                    <img
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <AppLink
                            to={RoutePath.article_details + article.id}
                            target={target}
                        >
                            <Button theme={ThemeButton.OUTLINE}>
                                {t("Read more")}
                            </Button>
                        </AppLink>

                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
            ])}
        >
            <AppLink
                to={RoutePath.article_details + article.id}
                target={target}
            >
                <Card className={cls.card}>
                    <div className={cls.imageWrap}>
                        <img
                            src={article.img}
                            className={cls.img}
                            alt={article.title}
                        />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <div className={cls.infoWrap}>
                        {types}
                        {views}
                    </div>
                    <Text text={article.title} className={cls.title} />
                </Card>
            </AppLink>
        </div>
    );
});
