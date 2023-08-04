import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "shared/ui/Page/Page";

interface AboutPageProps {}

const AboutPage = memo((props: AboutPageProps) => {
    const { t, i18n } = useTranslation("about");

    return <Page>{t("О сайте", { ns: "about" })}</Page>;
});

export default AboutPage;
