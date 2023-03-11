import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkThem } from "shared/ui/AppLink/AppLink";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    onClick={onToggleModal}
                    theme={ThemeButton.CLEAR_INVERTED}
                >
                    {t("Войти")}
                </Button>
            </div>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {t(`Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas sed maxime pariatur explicabo incidunt. Amet, unde
                inventore consequuntur numquam odit et blanditiis dolores
                tempore enim nobis laboriosam! Corrupti, quia sequi.`)}
            </Modal>
        </div>
    );
};
