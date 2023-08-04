import React from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Page } from "shared/ui/Page/Page";
import cls from "./NotFound.module.scss";

interface NotFoundProps {
    className?: string;
}

export const NotFound: React.FC<NotFoundProps> = (props) => {
    const { t } = useTranslation();
    const { className } = props;

    return (
        <Page className={classNames(cls.notFound, {}, [className])}>
            {t("Страница не найдена")}
        </Page>
    );
};
