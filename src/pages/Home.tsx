import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <h1>This is Home page</h1>
            <div className="flex flex-col">
                <Link to="/auth/register">Register page</Link>
                <Link to="/auth/login">Login page</Link>
                <Link to="/auth/verify">Verify page</Link>
                <Link to="/user/profile">Profile page</Link>
            </div>
            <h1>{import.meta.env.VITE_BACKEND_URL}</h1>
        </>
    );
}
