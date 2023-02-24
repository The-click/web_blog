import { BugButton } from "app/providers/ErrorBoundary";
import React from "react";
import { useTranslation } from "react-i18next";

interface MainPageProps {}
const MainPage: React.FC<MainPageProps> = () => {
    const { t, i18n } = useTranslation("main");

    return (
        <div>
            <BugButton />
            {t("Главная")}
        </div>
    );
};

export default MainPage;
