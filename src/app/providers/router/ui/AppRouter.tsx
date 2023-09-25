import { Suspense, memo, useCallback, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import {
    AppRouteProps,
    routeConfig,
} from "shared/config/routerConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";

import { RequireAuth } from "./RequireAuth";
import { RequireRoles } from "./RequireRoles";

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
        );

        const validateRoute = useMemo(() => {
            let validElem = element;
            if (route.roles) {
                validElem = (
                    <RequireRoles roles={route.roles}>{validElem}</RequireRoles>
                );
            }
            if (route.authOnly) {
                validElem = <RequireAuth>{validElem}</RequireAuth>;
            }

            return validElem;
        }, []);
        return (
            <Route key={route.path} path={route.path} element={validateRoute} />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
