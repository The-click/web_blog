import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { RoutePath } from "shared/config/routerConfig/routeConfig";
import MainIcon from "shared/assets/icon/Home.svg";
import AboutIcon from "shared/assets/icon/About.svg";
import ProfileIcon from "shared/assets/icon/profile.svg";
import ArticleIcon from "shared/assets/icon/article.svg";
import { SidebarItemType } from "../type/sidebar";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const SidebarItemList: SidebarItemType[] = [
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
    ];
    if (userData) {
        SidebarItemList.push(
            {
                path: RoutePath.profile + userData.id,
                Icon: ProfileIcon,
                text: "Profile",
                authOnly: true,
            },
            {
                path: RoutePath.article,
                Icon: ArticleIcon,
                text: "Article",
                authOnly: true,
            }
        );
    }

    return SidebarItemList;
});
