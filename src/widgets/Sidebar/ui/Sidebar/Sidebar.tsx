import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routerConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkThem } from "shared/ui/AppLink/AppLink";
import { Button, SizeButton, ThemeButton } from "shared/ui/Button/Button";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import MainIcon from "shared/assets/icon/Home.svg";
import AboutIcon from "shared/assets/icon/About.svg";

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
            <Button
                onClick={onToggle}
                type="button"
                data-testid="sidebar-toggle"
                theme={ThemeButton.BACKGROUND_INVERTED}
                square
                size={SizeButton.L}
                className={cls.collapsBtn}
            >
                {collapsed ? ">" : "<"}
            </Button>
            <div className={cls.items}>
                <AppLink
                    theme={AppLinkThem.SECONDARY}
                    to={RoutePath.main}
                    className={cls.item}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>{t("Main")}</span>
                </AppLink>
                <AppLink
                    theme={AppLinkThem.SECONDARY}
                    to={RoutePath.about}
                    className={cls.item}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>{t("About")}</span>
                </AppLink>
            </div>
            <div className={cls.switcher}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
};
