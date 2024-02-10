import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Loading from './components/Loading';
import '@mantine/core/styles.css';
import routes from './routes';
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MantineProvider>
            <Notifications position="top-right" />
            <Suspense fallback={<Loading />}>
                <RouterProvider router={routes} />
            </Suspense>
        </MantineProvider>
    </React.StrictMode>,
);
