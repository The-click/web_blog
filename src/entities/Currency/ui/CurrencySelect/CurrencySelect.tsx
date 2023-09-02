import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ListBox } from "shared/ui/ListBox/ListBox";
import { Currency } from "../../model/types/currency";

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
        <ListBox
            className={className}
            label={t("Change currancy")}
            items={options}
            value={value}
            defaultValue={t("Select currancy")}
            onChange={onChangeHandler}
            direction="top right"
            readonly={readonly}
        />
    );
});
