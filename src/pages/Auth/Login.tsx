import { FC } from "react";
import { Link } from "react-router-dom";
import animationData from "../../assets/Animation-2.json";
import LoginForm from "../../components/Auth/LoginForm";
import AuthLayout from "../../components/layout/AuthLayout";

const Login: FC = () => {
    return (
        <AuthLayout animationData={animationData}>
            <h1 className="text-2xl text-gray-800 font-bold text-center">
                Join the Knowledge Exchange Hub!
            </h1>
            <p className="text-sm text-center text-gray-500">
                Register to Participate and Share Your Expertise within Our Collage Community
            </p>
            <LoginForm />
            <p className="font-semibold text-gray-500">
                New on the platform?{" "}
                <Link className="text-blue-600 underline" to="/auth/register">
                    Register
                </Link>
            </p>
        </AuthLayout>
    );
};

export default Login;
