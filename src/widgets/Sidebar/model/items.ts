import { RoutePath } from "shared/config/routerConfig/routeConfig";
import MainIcon from "shared/assets/icon/Home.svg";
import AboutIcon from "shared/assets/icon/About.svg";
import ProfileIcon from "shared/assets/icon/profile.svg";

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: "Main",
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: "About",
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: "Profile",
    },
];
