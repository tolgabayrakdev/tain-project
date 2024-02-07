import { Link } from 'react-router-dom';

type Props = {};

export default function Register({}: Props) {
    return (
        <div>
            Register
            <Link to="/login"> to login</Link>
        </div>
    );
}
