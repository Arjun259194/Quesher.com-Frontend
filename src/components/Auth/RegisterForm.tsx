import { useMutation } from "@tanstack/react-query";
import { FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import Server from "../../utils/server";
import ErrorMsg from "../Auth/Error";
import Button from "../Button";
import Loading from "../Loading";
import InputText from "../TextInput";

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { changeHandler, state } = useForm({
        username: "",
        email: "",
        bio: "",
        password: "",
    });
    const nav = useNavigate();

    const mutation = useMutation({ mutationFn: Server.register });

    const submitHandler: FormEventHandler = async (event) => {
        console.log("Submit function called");
        event.preventDefault();
        mutation.mutate(state, {
            onSuccess: () => {
                nav("/auth/login");
            },
            onError(error) {
                console.error("Error while mutating", error);
            },
        });
    };

    return !mutation.isPending ? (
        <form className=" w-full md:w-4/5 space-y-2 md:space-y-4" onSubmit={submitHandler}>
            <InputText
                changeHandler={changeHandler}
                name="username"
                text="Username"
                type="text"
                value={state.username}
                required
            />
            <InputText
                changeHandler={changeHandler}
                name="email"
                text="Email"
                type="email"
                value={state.email}
                required
            />
            <div className="relative flex flex-col">
                <label className="text-gray-500 font-semibold capitalize text-lg" htmlFor="bio">
                    Bio <span className="text-sm font-normal">(can be changes later)</span>
                </label>
                <textarea
                    value={state.bio}
                    onChange={changeHandler}
                    className="shadow-md border border-gray-400 text-base px-2 py-1 rounded-md outline-none"
                    required
                    name="bio"
                    id="bio"
                ></textarea>
            </div>
            <InputText
                changeHandler={changeHandler}
                name="password"
                text="Password"
                type={!showPassword ? "password" : "text"}
                value={state.password}
                required
            >
                <button
                    className="capitalize w-min gap-1 mx-1 text-blue-600"
                    onClick={() => setShowPassword(!showPassword)}
                    type="button"
                >
                    {!showPassword ? "show" : "hide"}
                </button>
            </InputText>
            <Button className="w-full" variant="primary" type="submit">
                Continue
            </Button>
            {mutation.isError ? <ErrorMsg>Something went wrong</ErrorMsg> : null}
        </form>
    ) : (
        <div className="w-1/5 flex flex-col items-center">
            <Loading />
            <h2 className="text-xl font-semibold">Loading...</h2>
        </div>
    );
};

export default RegisterForm;
