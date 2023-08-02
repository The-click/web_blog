import { StateSchema } from "app/providers/StoreProvider";
import MainIcon from "shared/assets/icon/Home.svg";
import AboutIcon from "shared/assets/icon/About.svg";
import ProfileIcon from "shared/assets/icon/profile.svg";
import ArticleIcon from "shared/assets/icon/article.svg";
import { RoutePath } from "shared/config/routerConfig/routeConfig";
import { getSidebarItems } from "./getSidebarItems";
import { SidebarItemType } from "../type/sidebar";

describe("Sidebar selectors: getSidebarItems", () => {
    test("should return auth item list", () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    id: "1",
                    username: "user",
                },
            },
        };
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
            {
                path: RoutePath.profile + (state.user?.authData?.id || "1"),
                Icon: ProfileIcon,
                text: "Profile",
                authOnly: true,
            },
            {
                path: RoutePath.article,
                Icon: ArticleIcon,
                text: "Article",
                authOnly: true,
            },
        ];
        expect(getSidebarItems(state as StateSchema)).toEqual(SidebarItemList);
    });
    test("should return not auth item list", () => {
        const state: DeepPartial<StateSchema> = {};
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
        expect(getSidebarItems(state as StateSchema)).toEqual(SidebarItemList);
    });
});
