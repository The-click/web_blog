import React, { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { AppLink, AppLinkThem } from "shared/ui/AppLink/AppLink";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { SidebarItemType } from "../../model/type/sidebar";
import cls from "./SidebarItem.module.scss";

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { item, collapsed } = props;
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <div className={classNames(cls.sidebarItem, {}, [])}>
            <AppLink
                theme={AppLinkThem.SECONDARY}
                to={item.path}
                className={classNames(
                    cls.item,
                    { [cls.collaps]: collapsed },
                    []
                )}
            >
                <item.Icon className={cls.icon} />
                <span className={cls.link}>{t(item.text)}</span>
            </AppLink>
        </div>
    );
});
