import { EditableProfileCard } from "features/editableProfileCard";
import { fetchProfileData } from "features/editableProfileCard/model/service/fetchProfileData/fetchProfileData";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Page } from "shared/ui/Page/Page";
import { VStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text/Text";
import cls from "./ProfilePage.module.scss";

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo((props: ProfilePageProps) => {
    const { className } = props;
    const { t } = useTranslation("profile");
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    if (!id) {
        return <Text text={t("Profile not found")} />;
    }

    return (
        <Page className={classNames(cls.profilePage, {}, [className])}>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
});

export default ProfilePage;
