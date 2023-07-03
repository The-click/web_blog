import React, { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";
import { Currency } from "../../model/types/currency";
import cls from "./CurrencySelect.module.scss";

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}
const options = Object.keys(Currency).map((key) => ({
    value: key,
    content: key,
}));

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange]
    );
    return (
        <div className={classNames(cls.currencySelect, {}, [className])}>
            <Select
                label={t("Change currancy")}
                options={options}
                value={value}
                onChange={onChangeHandler}
                readonly={readonly}
            />
        </div>
    );
});
