import { Listbox as HListBox } from "@headlessui/react";
import { Fragment, ReactNode, memo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "../Button/Button";
import { HStack } from "../Stack";
import cls from "./ListBox.module.scss";

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}
type DropDownDirection = "top" | "bottom";
interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    label?: ReactNode;
    readonly?: boolean;
    direction?: DropDownDirection;
}

const mapDirectionClass: Record<DropDownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop,
};

export const ListBox = memo((props: ListBoxProps) => {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        label,
        readonly,
        direction = "bottom",
    } = props;
    const [selectedPerson, setSelectedPerson] = useState();

    const optionalClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap="4">
            {label && <span>{label} </span>}
            <HListBox
                disabled={readonly}
                as={"div"}
                value={value}
                onChange={onChange}
                className={classNames(cls.ListBox, {}, [className])}
            >
                <HListBox.Button className={cls.trigger}>
                    <Button disabled={readonly}>{value ?? defaultValue}</Button>
                </HListBox.Button>
                <HListBox.Options
                    className={classNames(cls.options, {}, optionalClasses)}
                >
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [cls.active]: active,
                                            [cls.disabled]: item.disabled,
                                        },
                                        []
                                    )}
                                >
                                    {selected && "> "}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
});
