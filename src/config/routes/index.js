import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error";
import Dashboard from "../../views/admin/Dashboard"
import AdminLayout from '../../components/BasicUI/AdminLayout';
import Settings from '../../views/admin/Settings';

const router = createBrowserRouter([
    {
        path: "/",
        element: <AdminLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "/settings",
                element: <Settings />
            }
        ]
    },
]);

const AppRouter = () => <RouterProvider router={router} />

export default AppRouter 