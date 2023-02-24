import React from "react";
import { useTranslation } from "react-i18next";

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = () => {
    const { t, i18n } = useTranslation("about");

    return <div>{t("О сайте", { ns: "about" })}</div>;
};

export default AboutPage;
