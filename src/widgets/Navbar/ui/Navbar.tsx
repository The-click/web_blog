import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from "entities/User";
import { LoginModal } from "features/AuthByUsername";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RoutePath } from "shared/config/routerConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkThem } from "shared/ui/AppLink/AppLink";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
import { Text, TextTheme } from "shared/ui/Text/Text";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const auhtData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;
    console.log({ isAdminPanelAvailable, isAdmin, isManager, auhtData });
    if (auhtData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t("Blog app")}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkThem.SECONDARY}
                    className={cls.createLink}
                >
                    {t("Create article")}
                </AppLink>

                <Dropdown
                    direction="bottom left"
                    className={cls.dropdown}
                    items={[
                        ...(isAdminPanelAvailable
                            ? [
                                  {
                                      content: t("Админка"),
                                      href: RoutePath.admin_panel,
                                  },
                              ]
                            : []),
                        {
                            content: t("Профиль"),
                            href: RoutePath.profile + auhtData.id,
                        },
                        {
                            content: t("Выйти"),
                            onClick: onLogout,
                        },
                    ]}
                    trigger={<Avatar size={30} src={auhtData.avatar} />}
                />
            </header>
        );
    }
    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    onClick={onShowModal}
                    theme={ThemeButton.CLEAR_INVERTED}
                >
                    {t("Войти")}
                </Button>
            </div>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </header>
    );
});
