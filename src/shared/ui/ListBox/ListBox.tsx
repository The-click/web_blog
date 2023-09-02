import { Listbox as HListBox } from "@headlessui/react";
import { Fragment, ReactNode, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { DropDownDirection } from "shared/types/ui";
import { Button } from "../Button/Button";
import { HStack } from "../Stack";
import cls from "./ListBox.module.scss";

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

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
    "bottom left": cls.optionsBottomLeft,
    "bottom right": cls.optionsBottomRight,
    "top left": cls.optionsTopLeft,
    "top right": cls.optionsTopRight,
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
        direction = "bottom right",
    } = props;

    const optionalClasses = [mapDirectionClass[direction]];
    console.log({ optionalClasses, direction, mapDirectionClass });
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
                <HListBox.Button as={"div"} className={cls.trigger}>
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
