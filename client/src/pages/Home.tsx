import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="flex flex-col h-screen justify-center items-center bg-gradient-to-t from-indigo-50 to-blue-100">
            <h3 className="text-4xl ">Welcome</h3>
            <Link
                className="hover:text-blue-500 hover:underline duration-200"
                to="/login"
            >
                You can log in here
            </Link>
        </div>
    );
}
