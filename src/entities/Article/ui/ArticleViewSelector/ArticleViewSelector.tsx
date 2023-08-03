import React, { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import ListIcon from "shared/assets/icon/list.svg";
import TileIcon from "shared/assets/icon/tiled.svg";
import cls from "./ArticleViewSelector.module.scss";
import { ArticleView } from "../../model/type/article";

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (newView: ArticleView) => void;
}

const viewTypes = [
    { view: ArticleView.SMALL, icon: TileIcon },
    { view: ArticleView.BIG, icon: ListIcon },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, onViewClick, view } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ThemeButton.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames("", {
                            [cls.notSelected]: view === viewType.view,
                        })}
                    />
                </Button>
            ))}
        </div>
    );
});
