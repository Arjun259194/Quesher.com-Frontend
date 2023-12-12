import { useMutation } from "@tanstack/react-query";
import { FormEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import Server from "../../utils/server";
import Button from "../Button";
import Loading from "../Loading";
import InputText from "../TextInput";
import ErrorMsg from "./Error";

const LoginForm = () => {
    const { state, changeHandler } = useForm({ email: "", password: "" });
    const nav = useNavigate();
    const { isPending, isError, mutate } = useMutation({ mutationFn: Server.login });

    const submitHandler: FormEventHandler = (event) => {
        event.preventDefault();
        mutate(state, {
            onSuccess: () => {
                nav("/auth/verify");
            },
            onError: (e) => {
                console.error("Error while mutating ", e);
            },
        });
    };

    return isPending ? (
        <Loading />
    ) : (
        <form onSubmit={submitHandler} className=" w-full md:w-4/5 space-y-2 md:space-y-4">
            <InputText
                text="Email"
                changeHandler={changeHandler}
                value={state.email}
                type="email"
                name="email"
            />
            <InputText
                text="Password"
                changeHandler={changeHandler}
                value={state.password}
                type="password"
                name="password"
            />
            <Button type="submit" className="w-full" variant="primary">
                Login
            </Button>
            {isError ? <ErrorMsg>Something went wrong</ErrorMsg> : null}
        </form>
    );
};

export default LoginForm;
