import React, { ChangeEvent, memo, useMemo } from "react";
import { Mods, classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cls from "./Select.module.scss";

export interface SelectOptions<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOptions<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const { className, label, options, value, onChange, readonly } = props;
    const { t } = useTranslation();

    const optionList = useMemo(
        () =>
            options?.map((opt) => (
                <option
                    className={cls.option}
                    key={opt.value}
                    value={opt.value}
                >
                    {opt.content}
                </option>
            )),
        [options]
    );

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value as T);
        }
    };

    const mods: Mods = {};

    return (
        <div className={classNames(cls.wrap, mods, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionList}
            </select>
        </div>
    );
};
