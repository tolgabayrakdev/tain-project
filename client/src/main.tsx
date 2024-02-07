import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Loading from './components/Loading';
import '@mantine/core/styles.css';
import routes from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MantineProvider>
            <Suspense fallback={<Loading />}>
                <RouterProvider router={routes} />
            </Suspense>
        </MantineProvider>
    </React.StrictMode>,
);
