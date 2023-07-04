import React, { useEffect } from "react";
import { Mods, classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Select } from "shared/ui/Select/Select";
import { Currency, CurrencySelect } from "entities/Currency";
import { Country, CountrySelect } from "entities/Country";
import { Profile } from "../../model/types/profile";
import { Loader } from "../../../../shared/ui/Loader/Loader";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    onChangeLastName?: (value: string) => void;
    onChangeFirstName?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (value: Currency) => void;
    onChangeCountry?: (value: Country) => void;
    readonly?: boolean;
}

export const ProfileCard: React.FC<ProfileCardProps> = (props) => {
    const {
        className,
        data,
        error,
        isLoading,
        onChangeLastName,
        onChangeFirstName,
        onChangeCity,
        onChangeAge,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
        readonly,
    } = props;
    const { t } = useTranslation("profile");

    if (isLoading) {
        return (
            <div
                className={classNames(
                    cls.profileCard,
                    { [cls.isLoading]: true },
                    [className]
                )}
            >
                <Loader />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    if (error) {
        return (
            <div
                className={classNames(cls.profileCard, {}, [
                    className,
                    cls.error,
                ])}
            >
                <Text
                    align={TextAlign.CENTER}
                    theme={TextTheme.ERROR}
                    title={t("Произошла ошибка при загрузке профиля")}
                    text={t(" Попробуйте обновить страницу")}
                />
            </div>
        );
    }
    return (
        <div className={classNames(cls.profileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrap}>
                        <Avatar src={data?.avatar} alt={t("avatar user")} />
                    </div>
                )}
                <Input
                    value={data?.first}
                    placeholder={t("Введите ваше имя")}
                    className={cls.input}
                    prevText={t("Ваше имя")}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                />
                <Input
                    onChange={onChangeLastName}
                    value={data?.lastname}
                    placeholder={t("Введите вашу фамилию")}
                    className={cls.input}
                    prevText={t("Ваша фамилия")}
                    readonly={readonly}
                />
                <Input
                    onChange={onChangeAge}
                    value={data?.age}
                    type="number"
                    min={0}
                    max={150}
                    placeholder={t("Enter your age")}
                    className={cls.input}
                    prevText={t("Your age")}
                    readonly={readonly}
                />
                <Input
                    onChange={onChangeCity}
                    value={data?.city}
                    placeholder={t("Enter your city")}
                    className={cls.input}
                    prevText={t("Your city")}
                    readonly={readonly}
                />
                <Input
                    onChange={onChangeUsername}
                    value={data?.username}
                    placeholder={t("Enter your username")}
                    className={cls.input}
                    prevText={t("Your username")}
                    readonly={readonly}
                />
                <Input
                    onChange={onChangeAvatar}
                    value={data?.avatar}
                    placeholder={t("Enter your link on avatar")}
                    className={cls.input}
                    prevText={t("Link on avatar")}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
