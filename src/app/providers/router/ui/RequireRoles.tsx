import { getUserRoles } from "entities/User";
import { UserRole } from "entities/User/model/types/user";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "shared/config/routerConfig/routeConfig";

interface RequireRoles {
    children: JSX.Element;
    roles?: UserRole[];
}

export function RequireRoles({ children, roles }: RequireRoles) {
    const userRoles = useSelector(getUserRoles);
    const location = useLocation();

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        } else {
            return roles.some((reqRole) => {
                const hasRole = userRoles?.includes(reqRole);
                return hasRole;
            });
        }
    }, [roles, userRoles]);

    if (!hasRequiredRoles) {
        return (
            <Navigate
                to={RoutePath.forbidden}
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
}
