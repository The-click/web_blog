import { BugButton } from "app/providers/ErrorBoundary";
import { Counter } from "entities/Counter";
import React from "react";
import { useTranslation } from "react-i18next";

interface MainPageProps {}
const MainPage: React.FC<MainPageProps> = () => {
    const { t, i18n } = useTranslation("main");

    return (
        <div>
            <BugButton />
            {t("Главная")}

            {/* <Counter /> */}
        </div>
    );
};

export default MainPage;
