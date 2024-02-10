import { Outlet } from 'react-router-dom';

type Props = {};

export default function AuthenticationLayout({ }: Props) {
    return (
        <section>
            <Outlet />
        </section>
    );
}
