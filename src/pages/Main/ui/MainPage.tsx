import { BugButton } from "app/providers/ErrorBoundary";
import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
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
        </Page>
    );
});

export default MainPage;
