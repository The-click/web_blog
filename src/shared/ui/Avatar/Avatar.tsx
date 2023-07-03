import React, { CSSProperties, useMemo } from "react";
import { Mods, classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import cls from "./Avatar.module.scss";

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar: React.FC<AvatarProps> = (props) => {
    const { className, src, size, alt } = props;

    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size || 100,
            height: size || 100,
        }),
        [size]
    );

    return (
        <img
            src={src}
            style={styles}
            alt={alt}
            className={classNames(cls.avatar, mods, [className])}
        />
    );
};
