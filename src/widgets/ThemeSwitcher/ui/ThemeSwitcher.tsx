import { Theme, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import ThemeDark from "shared/assets/icon/theme-dark.svg";
import ThemeNormal from "shared/assets/icon/theme-light.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={classNames(cls.themeSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}>
      {theme === Theme.DARK ? <ThemeDark />:<ThemeNormal/>}
    </Button>
  );
};