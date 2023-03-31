import { createBrowserRouter } from "react-router-dom";
import MainBody from "./mainPart/MainBody";
import { Children } from "react";
import Main from "./Main";
import ReportingCycle from "./ReportingCycle";
import Dashboard from "./Dashboard";
import UserManagement from "./mainPart/UserManagement";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:    [
            {
                path: '/',
                element: <MainBody></MainBody>
            },
            {
                path: '/reporting_cycle',
                element:<ReportingCycle></ReportingCycle> ,
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
            },
            {
                path: '/user_management',
                element: <UserManagement></UserManagement>,
            },
        ]
    }
])


export default router;