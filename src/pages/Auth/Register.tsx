import Lottie from "lottie-react";
import { FC } from "react";
import { Link } from "react-router-dom";
import animation_1 from "../../assets/Animation-1.json";
import RegisterForm from "../../components/Auth/RegisterForm";

const Register: FC = () => {
  return (
    <>
      <main className="w-screen h-screen grid grid-cols-2">
        <section className="bg-image-1 bg-cover bg-no-repeat bg-center flex items-center justify-center col-span-2 md:col-span-1">
          <div className="bg-white py-10 border border-gray-200 rounded-xl space-y-2 shadow-lg px-10 md:p-5 mx-5 flex flex-col items-center">
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
          </div>
        </section>
        <section className="hidden md:flex relative bg-gradient-to-r from-sun-yellow to-white bg-cover bg-center bg-no-repeat">
          <Lottie animationData={animation_1} />
        </section>
      </main>
    </>
  );
};

export default Register;
