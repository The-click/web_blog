import { UserRole } from "entities/User/model/types/user";
import { AboutPage } from "pages/About";
import { AdminPanelPage } from "pages/AdminPanelPage";
import { ArticlePage } from "pages/Article";
import { ArticleDetailsPage } from "pages/ArticleDetails";
import { ArticleEditPage } from "pages/ArticleEditPage";
import { ForbiddenPage } from "pages/ForbiddenPage";
import { MainPage } from "pages/Main";
import { NotFound } from "pages/NotFound";
import { ProfilePage } from "pages/ProfilePage";
import { RouteProps } from "react-router-dom";

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};

export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    PROFILE = "profile",
    ARTICLE = "article",
    ARTICLE_DETAILS = "article_details",
    ARTICLE_CREATE = "article_create",
    ARTICLE_EDIT = "article_edit",
    ADMIN_PANEL = "admin_panel",
    // last
    NOTFOUND = "not_found",
    FORBIDDEN = "forbidden",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.MAIN]: "/",
    [AppRoutes.PROFILE]: "/profile/", // :id
    [AppRoutes.ADMIN_PANEL]: "/admin",
    [AppRoutes.ARTICLE]: "/articles",
    [AppRoutes.ARTICLE_DETAILS]: "/articles/", // :id
    [AppRoutes.ARTICLE_CREATE]: "/articles/new",
    [AppRoutes.ARTICLE_EDIT]: "/articles/:id/edit",
    [AppRoutes.NOTFOUND]: "*",
    [AppRoutes.FORBIDDEN]: "/forbidden",
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
    [AppRoutes.ARTICLE_CREATE]: {
        path: RoutePath.article_create,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: RoutePath.article_edit,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.NOTFOUND]: {
        path: RoutePath.not_found,
        element: <NotFound />,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: RoutePath.admin_panel,
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    [AppRoutes.FORBIDDEN]: {
        path: RoutePath.forbidden,
        element: <ForbiddenPage />,
    },
};
