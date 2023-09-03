import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ProfileCard } from "entities/Profile";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { VStack } from "shared/ui/Stack";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileReadOnly } from "../../model/selectors/getProfileReadOnly/getProfileReadOnly";
import { getProfileValidateErrors } from "../../model/selectors/getProfileValidateErrors/getProfileValidateErrors";
import { fetchProfileData } from "../../model/service/fetchProfileData/fetchProfileData";
import { profileActions, profileReducer } from "../../model/slice/profileSlice";
import { ValidateProfileError } from "../../model/types/editableProfileCardSchema";
import { EditableProfileCardHeader } from "../EditableProfileCardHeader/EditableProfileCardHeader";

const reducers: ReducersList = {
    profile: profileReducer,
};
interface EditableProfileCardProps {
    className?: string;
    id: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation("profile");
    const dispatch = useAppDispatch();

    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadOnly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t("Server error"),
        [ValidateProfileError.INCORRECT_AGE]: t("Incorrect age"),
        [ValidateProfileError.INCORRECT_COUNTRY]: t("Incorrect country"),
        [ValidateProfileError.INCORRECT_USER_DATA]: t(
            "Incorrect user firstnmae or lastname"
        ),
        [ValidateProfileError.NO_DATA]: t("No data"),
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });
    const onChangeFirstName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ first: value || "" }));
        },
        [dispatch]
    );

    const onChangeLastName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || "" }));
        },
        [dispatch]
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value || "" }));
        },
        [dispatch]
    );

    const onChangeAge = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
        },
        [dispatch]
    );

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value || "" }));
        },
        [dispatch]
    );

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || "" }));
        },
        [dispatch]
    );
    const onChangeCurrency = useCallback(
        (value?: Currency) => {
            dispatch(profileActions.updateProfile({ currency: value }));
        },
        [dispatch]
    );

    const onChangeCountry = useCallback(
        (value?: Country) => {
            dispatch(profileActions.updateProfile({ country: value }));
        },
        [dispatch]
    );

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack gap="8" max className={classNames("", {}, [className])}>
                <EditableProfileCardHeader />
                {validateErrors?.length &&
                    validateErrors.map((err) => (
                        <Text
                            theme={TextTheme.ERROR}
                            key={err}
                            text={validateErrorTranslates[err]}
                        />
                    ))}
                <ProfileCard
                    data={formData}
                    onChangeLastName={onChangeLastName}
                    onChangeFirstName={onChangeFirstName}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                />
            </VStack>
        </DynamicModuleLoader>
    );
});
