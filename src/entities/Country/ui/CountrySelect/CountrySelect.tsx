import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ListBox } from "shared/ui/ListBox/ListBox";
import { Country } from "../../model/types/country";

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
        <ListBox
            className={className}
            defaultValue={t("Select country")}
            label={t("Change country")}
            items={options}
            value={value}
            readonly={readonly}
            direction="top"
            onChange={onChangeHandler}
        />
    );
});
