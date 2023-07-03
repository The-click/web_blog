import React, { Suspense, memo, useMemo } from "react";
import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "pages/Main";
import { AboutPage } from "pages/About";
import { routeConfig } from "shared/config/routerConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";

const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);

    const routers = useMemo(
        () =>
            Object.values(routeConfig).filter((route) => {
                if (route.authOnly && !isAuth) {
                    return false;
                }
                return true;
            }),
        [isAuth]
    );

    return (
        <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">
                <Routes>
                    {routers.map(({ path, element }) => (
                        <Route path={path} element={element} />
                    ))}
                </Routes>
            </div>
        </Suspense>
    );
};

export default memo(AppRouter);
