import { useMutation } from "@tanstack/react-query";
import { FC, FormEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import Server from "../../utils/server";
import Button from "../Button";
import Loading from "../Loading";
import ErrorMsg from "./Error";

const OTPForm: FC = () => {
    const { state, changeHandler } = useForm({
        code: "",
    });

    const nav = useNavigate();

    const mutation = useMutation({ mutationFn: Server.verify });

    const submitHandler: FormEventHandler = (e) => {
        e.preventDefault();
        mutation.mutate(state, {
            onSuccess: () => {
                nav("/user/profile");
            },
            onError: (e) => {
                console.error("Error while verifying user " + e);
            },
        });
    };
    return mutation.isPending ? (
        <Loading />
    ) : (
        <form className="w-full" onSubmit={submitHandler}>
            <div className="flex items-center flex-col gap-2">
                <label className="text-xl capitalize font-semibold " htmlFor="otp">
                    Enter OTP
                </label>
                <input
                    required
                    className="w-10/12 text-center focus:border-blue-200 focus:shadow-blue-200 shadow-lg outline-none p-2 border-2 border-gray-300 rounded-md"
                    value={state.code}
                    onChange={changeHandler}
                    type="text"
                    name="code"
                    id="code"
                />
                <Button type="submit" className="w-full" variant="primary">
                    Verify
                </Button>
                {mutation.isError ? <ErrorMsg>Something went wrong</ErrorMsg> : null}
            </div>
        </form>
    );
};

export default OTPForm;
