import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";

interface BugButtonProps {
    className?: string;
}

// Компонент для тестирования ErrorBoundary

export const BugButton: React.FC<BugButtonProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    const makeThrow = () => setError(true);

    return <Button onClick={makeThrow}>{t("Ошибка")}</Button>;
};
