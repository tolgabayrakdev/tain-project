import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Loading from "../components/Loading";


function AuthWrapper(WrappedComponent: any) {
    const Wrapper = (props: any) => {
        const [loogedIn, setLoggedIn] = useState(false);
        const [loading, setLoading] = useState(true);
        const [accessDenied, setAccessDenied] = useState(false);

        useEffect(() => {
            const verifyAuthToken = async () => {
                try {
                    const res = await fetch('http://localhost:8000/api/v1/auth/verify', {
                        method: 'POST',
                        credentials: 'include',
                    });
                    if (res.status === 200) {
                        setLoading(false);
                        setLoggedIn(true);
                    } else if (res.status == 403) {
                        setLoading(false);
                        setAccessDenied(true);
                    }
                } catch (error) {
                    setLoading(false);
                    setAccessDenied(true);
                }
            };
            verifyAuthToken();
        }, [])

        if (loading) {
            return <Loading />
        } else if (accessDenied) {
            return (
                <section>
                    <h3>Access Denied!</h3>
                    <Link to="/login">
                        Go to login page
                    </Link>
                </section>
            )
        }
        return <WrappedComponent {...props} />
    }
    return Wrapper;
}
export default AuthWrapper;