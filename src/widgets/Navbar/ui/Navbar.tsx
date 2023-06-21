import { LoginModal } from "features/AuthByUsername";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkThem } from "shared/ui/AppLink/AppLink";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const auhtData = useSelector(getUserAuthData);
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

    if (auhtData) {
        return (
            <div className={classNames(cls.navbar, {}, [className])}>
                <div className={cls.links}>
                    <Button
                        onClick={onLogout}
                        theme={ThemeButton.CLEAR_INVERTED}
                    >
                        {t("Выйти")}
                    </Button>
                </div>
            </div>
        );
    }
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    onClick={onShowModal}
                    theme={ThemeButton.CLEAR_INVERTED}
                >
                    {t("Войти")}
                </Button>
            </div>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
};
