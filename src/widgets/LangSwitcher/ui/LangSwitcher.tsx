import React, { memo } from "react";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import ThemeDark from "shared/assets/icon/theme-dark.svg";
import ThemeNormal from "shared/assets/icon/theme-light.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
    className?: string;
    short: boolean;
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
    const { className, short } = props;
    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
    };

    return (
        <Button
            onClick={toggleLang}
            className={classNames(cls.langSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
        >
            {t(short ? "Краткий перевод" : "Перевод")}
        </Button>
    );
});
