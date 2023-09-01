import { memo, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, SizeButton, ThemeButton } from "shared/ui/Button/Button";
import { VStack } from "shared/ui/Stack";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemList = useSelector(getSidebarItems);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(
        () =>
            sidebarItemList.map((item) => (
                <SidebarItem
                    item={item}
                    key={item.path}
                    collapsed={collapsed}
                />
            )),
        [collapsed, sidebarItemList]
    );

    return (
        <section
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
            <VStack role="navigation" gap="8" className={cls.items}>
                {itemsList}
            </VStack>
            <div className={cls.switcher}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </section>
    );
});
