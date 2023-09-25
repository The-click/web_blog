import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Page } from "shared/ui/Page/Page";
import cls from "./AdminPanelPage.module.scss";

interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage = memo((props: AdminPanelPageProps) => {
    const { className } = props;
    const { t } = useTranslation("adminPanelPage");

    return (
        <Page className={classNames(cls.AdminPanelPage, {}, [className])}>
            {t("adminPanelPage")}
        </Page>
    );
});

export default AdminPanelPage;
