import React, { ReactNode, memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { StringIfPlural, useTranslation } from "react-i18next";
import cls from "./Tabs.module.scss";
import { Card, CardTheme } from "../Card/Card";

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
    const { className, tabs, value, onTabClick } = props;
    const { t } = useTranslation();

    const clickHandler = useCallback(
        (tab: TabItem) => () => onTabClick(tab),
        [onTabClick]
    );

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    theme={
                        tab.value === value
                            ? CardTheme.OUTLINED
                            : CardTheme.NORMAL
                    }
                    className={cls.tab}
                    key={tab.value}
                    onClick={clickHandler(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
