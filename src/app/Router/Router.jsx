import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from 'react-router-dom';

import { ResumeBuilderPage } from '@/pages/ResumeBuilderPage/ResumeBuilderPage';
import { ROUTES } from './routes';

const router = createBrowserRouter([
    {
        path: ROUTES.root,
        element: <Navigate to={ROUTES.resumake} replace />,
    },
    {
        path: ROUTES.resumake,
        element: <ResumeBuilderPage />,
    },
]);

export const Router = () => <RouterProvider router={router} />;
