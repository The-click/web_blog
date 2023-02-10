import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";

export enum AppLinkThem {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkThem;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
  const { className, children, to, theme = AppLinkThem.PRIMARY, ...otherProps } = props;

  return (
    <Link className={classNames(cls.appLink, {}, [className, cls[theme]])} to={to} {...otherProps}>
      {children}
    </Link>
  );
};
