import React, { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={classNames(cls.sidebar, { [cls.collaps]: collapsed }, [className])}>
      <button onClick={onToggle} type="button">
        Toggle
      </button>
      <div className={cls.switcher}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
