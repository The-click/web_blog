import React from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
    className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input
                type="text"
                className={classNames(cls.input, {}, [])}
                placeholder={t("Введите username")}
                autoFocus
            />
            <Input
                type="text"
                className={classNames(cls.input, {}, [])}
                placeholder={t("Введите пароль")}
            />
            <Button className={cls.loginBtn}> {t("Войти")}</Button>
        </div>
    );
};
