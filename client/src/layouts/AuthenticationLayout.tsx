import { Notifications } from '@mantine/notifications';
import { Outlet } from 'react-router-dom';

type Props = {};

export default function AuthenticationLayout({}: Props) {
    return (
        <section>
            <Notifications position="top-center" />
            <Outlet />
        </section>
    );
}
