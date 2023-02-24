import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(cls.sidebar, { [cls.collaps]: collapsed }, [
                className,
            ])}
            data-testid="sidebar"
        >
            <button
                onClick={onToggle}
                type="button"
                data-testid="sidebar-toggle"
            >
                {t("Toggle")}
            </button>
            <div className={cls.switcher}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
