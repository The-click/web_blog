import { type } from "os";
import React, { InputHTMLAttributes, memo } from "react";
import { Mods, classNames } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "readOnly"
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    type?: string;
    placeholder?: string;
    prevText?: string;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = "text",
        placeholder,
        prevText,
        readonly,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.inputWrapper, {}, [])}>
            {prevText && <span className={cls.prevText}>{prevText}</span>}
            <input
                readOnly={readonly}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={classNames(cls.input, mods, [className])}
                placeholder={placeholder}
                {...otherProps}
            />
        </div>
    );
});
