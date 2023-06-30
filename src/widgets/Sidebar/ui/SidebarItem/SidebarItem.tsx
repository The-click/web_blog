import React, { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { AppLink, AppLinkThem } from "shared/ui/AppLink/AppLink";
import cls from "./SidebarItem.module.scss";
import { SidebarItemType } from "../../model/items";

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { item, collapsed } = props;
    const { t } = useTranslation();

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
