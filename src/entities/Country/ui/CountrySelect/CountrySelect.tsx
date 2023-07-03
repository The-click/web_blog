import React, { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";
import { Country } from "../../model/types/country";
import cls from "./CountrySelect.module.scss";

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}
const options = Object.keys(Country).map((key) => ({
    value: key,
    content: key,
}));

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange]
    );
    return (
        <div className={classNames(cls.countrySelect, {}, [className])}>
            <Select
                label={t("Change country")}
                options={options}
                value={value}
                onChange={onChangeHandler}
                readonly={readonly}
            />
        </div>
    );
});
