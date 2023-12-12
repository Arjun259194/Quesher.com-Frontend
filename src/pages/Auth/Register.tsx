import { FC } from "react";
import { Link } from "react-router-dom";
import animation_1 from "../../assets/Animation-1.json";
import RegisterForm from "../../components/Auth/RegisterForm";
import AuthLayout from "../../components/layout/AuthLayout";

const Register: FC = () => {
    return (
        <AuthLayout animationData={animation_1}>
            <h1 className="text-2xl text-gray-800 font-bold text-center">
                Join the Knowledge Exchange Hub!
            </h1>
            <p className="text-sm text-center text-gray-500">
                Register to Participate and Share Your Expertise within Our Collage Community
            </p>
            <RegisterForm />
            <p className="font-semibold text-gray-500">
                Already have an account?{" "}
                <Link className="text-blue-600 underline" to="/auth/login">
                    Login
                </Link>
            </p>
        </AuthLayout>
    );
};

export default Register;
