import React, { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { Text, TextTheme } from "shared/ui/Text/Text";
import i18n from "shared/config/i18n/i18n";
import { loginActions } from "../../model/slice/loginSlice";
import cls from "./LoginForm.module.scss";
import { getLocalState } from "../../model/selectors/getLocalState/getLocalState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";

interface LoginFormProps {
    className?: string;
}

enum LoginErrors {
    INCORRECT_DATA = "",
    SERVER_ERROR = "",
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const { username, password, error, isLoading } = useSelector(getLocalState);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );
    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );
    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Text title={t("Форма авторизации")} theme={TextTheme.PRIMARY}>
                {" "}
            </Text>
            {error && (
                <Text
                    text={i18n.t("Вы ввели неправильный логин или пароль")}
                    theme={TextTheme.ERROR}
                />
            )}
            <Input
                type="text"
                className={classNames(cls.input, {}, [])}
                placeholder={t("Введите username")}
                onChange={onChangeUsername}
                value={username}
                autoFocus
            />
            <Input
                type="text"
                className={classNames(cls.input, {}, [])}
                placeholder={t("Введите пароль")}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={cls.loginBtn}
                theme={ThemeButton.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {" "}
                {t("Войти")}
            </Button>
        </div>
    );
});
