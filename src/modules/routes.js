import React from "react";
import App from "../App";
import { Icons, RootBoundary } from "../common/components";
import AdminHome from "./admin/Home";

import { PrivateRoute } from "./common/protected-route/protectedRoute";
import { routes as adminRoutes } from "../modules/admin/routes";
import { routes as userManagement } from "../modules/user-management/routes";

const EmissionCalc = React.lazy(() => import("./emissions/components/EmissionCalculator/WrapperEmissionCalculator"));


const { Home } = Icons;

const routes =
    [
        {
            path: "/",
            element:
                <PrivateRoute>
                    <App />
                </PrivateRoute>,
            errorElement: <RootBoundary />,
            icon: <Home />,
            children: [
                {
                    title: "admin",
                    path: "admin",
                    element:
                        <PrivateRoute>
                            <AdminHome />
                        </PrivateRoute>,
                    children: adminRoutes || [],
                    errorElement: <RootBoundary />
                },
                {
                    path: "dashboard",
                    element:
                        <PrivateRoute>
                            <EmissionCalc />
                        </PrivateRoute>,
                    errorElement: <RootBoundary />
                }
            ]
        },
        {
            title: "user_management",
            children: userManagement || [],
            errorElement: <RootBoundary />
        }

    ];

export { routes };
