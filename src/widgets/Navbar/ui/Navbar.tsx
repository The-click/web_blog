import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkThem } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkThem.SECONDARY} to="/">
                    {t("Main")}
                </AppLink>
                <AppLink theme={AppLinkThem.SECONDARY} to="/about">
                    {t("About")}
                </AppLink>
            </div>
        </div>
    );
};
