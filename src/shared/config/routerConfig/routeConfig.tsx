import { AboutPage } from "pages/About";
import { ArticlePage } from "pages/Article";
import { ArticleDetailsPage } from "pages/ArticleDetails";
import { MainPage } from "pages/Main";
import { NotFound } from "pages/NotFound";
import { ProfilePage } from "pages/ProfilePage";
import { RouteProps } from "react-router-dom";

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
};

export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    PROFILE = "profile",
    ARTICLE = "article",
    ARTICLE_DETAILS = "article_details",

    // last
    NOTFOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.MAIN]: "/",
    [AppRoutes.PROFILE]: "/profile/", // :id
    [AppRoutes.ARTICLE]: "/articles",
    [AppRoutes.ARTICLE_DETAILS]: "/articles/", // :id
    [AppRoutes.NOTFOUND]: "*",
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE]: {
        path: RoutePath.article,
        element: <ArticlePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.NOTFOUND]: {
        path: RoutePath.not_found,
        element: <NotFound />,
    },
};
