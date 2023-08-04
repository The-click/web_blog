import React, { Suspense, memo, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "pages/Main";
import { AboutPage } from "pages/About";
import {
    AppRouteProps,
    routeConfig,
} from "shared/config/routerConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";

import { RequireAuth } from "./RequireAuth";

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth>{element}</RequireAuth>
                    ) : (
                        element
                    )
                }
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
