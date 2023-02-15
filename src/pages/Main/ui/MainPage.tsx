import { BugButton } from "app/providers/ErrorBoundary";
import React from "react";
import { useTranslation } from "react-i18next";

const MainPage = () => {
    const { t, i18n } = useTranslation("main");

    return (
        <div>
            <BugButton />
            {t("Главная")}
        </div>
    );
};

export default MainPage;
