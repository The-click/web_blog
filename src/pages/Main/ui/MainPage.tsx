import { BugButton } from "app/providers/ErrorBoundary";
import { Counter } from "entities/Counter";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";

interface MainPageProps {}
const MainPage: React.FC<MainPageProps> = () => {
    const { t, i18n } = useTranslation("main");

    const [value, setValue] = useState("");

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            <BugButton />
            {t("Главная")}

            {/* <Counter /> */}
        </div>
    );
};

export default MainPage;
