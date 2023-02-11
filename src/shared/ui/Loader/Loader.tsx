import React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import "./Loader.scss";

interface LoaderProps {
    className?: string;
}

export const Loader: React.FC<LoaderProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames("", {}, [className])}>
            <div className="lds-ellipsis">
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
};
