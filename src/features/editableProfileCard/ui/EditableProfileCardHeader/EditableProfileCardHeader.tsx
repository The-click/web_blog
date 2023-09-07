import { getUserAuthData } from "entities/User";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { HStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text/Text";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileReadOnly } from "../../model/selectors/getProfileReadOnly/getProfileReadOnly";
import { updateProfileData } from "../../model/service/updateProfileData/updateProfileData";
import { profileActions } from "../../model/slice/profileSlice";

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader: React.FC<
    EditableProfileCardHeaderProps
> = (props) => {
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
                        <Button
                            theme={ThemeButton.OUTLINE}
                            data-testid={"EditableProfileCardHeader.EditButton"}
                            onClick={onEdit}
                        >
                            {t("Редактировать")}
                        </Button>
                    ) : (
                        <HStack gap="8">
                            <Button
                                theme={ThemeButton.OUTLINE_RED}
                                onClick={onCancelEdit}
                                data-testid={
                                    "EditableProfileCardHeader.CancelButton"
                                }
                            >
                                {t("Отменить")}
                            </Button>
                            <Button
                                theme={ThemeButton.OUTLINE}
                                onClick={onSaveEdit}
                                data-testid={
                                    "EditableProfileCardHeader.SaveButton"
                                }
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
