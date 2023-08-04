import { BugButton } from "app/providers/ErrorBoundary";
import { Counter } from "entities/Counter";
import React, { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { Page } from "shared/ui/Page/Page";

interface MainPageProps {}
const MainPage = memo((props: MainPageProps) => {
    const { t, i18n } = useTranslation("main");

    const [value, setValue] = useState("");

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page>
            <BugButton />
            {t("Главная")}

            {/* <Counter /> */}
        </Page>
    );
});

export default MainPage;
