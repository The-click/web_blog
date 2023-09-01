import {
    getProfileData,
    getProfileReadOnly,
    profileActions,
    updateProfileData,
} from "entities/Profile";
import { getUserAuthData } from "entities/User";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { HStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text/Text";

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader: React.FC<ProfilePageHeaderProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation("profile");

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const readonly = useSelector(getProfileReadOnly);

    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEditProfile());
    }, [dispatch]);
    const onSaveEdit = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack
            max
            justify="between"
            className={classNames("", {}, [className])}
        >
            <Text title={t("Профиль")} />

            {canEdit && (
                <div>
                    {readonly ? (
                        <Button theme={ThemeButton.OUTLINE} onClick={onEdit}>
                            {t("Редактировать")}
                        </Button>
                    ) : (
                        <HStack gap="8">
                            <Button
                                theme={ThemeButton.OUTLINE_RED}
                                onClick={onCancelEdit}
                            >
                                {t("Отменить")}
                            </Button>
                            <Button
                                theme={ThemeButton.OUTLINE}
                                onClick={onSaveEdit}
                            >
                                {t("Сохранить")}
                            </Button>
                        </HStack>
                    )}
                </div>
            )}
        </HStack>
    );
};
