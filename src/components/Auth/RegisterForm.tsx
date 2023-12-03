import { useState } from "react";
import useForm from "../../hooks/useForm";
import Button from "../Button";
import InputText from "../TextInput";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { changeHandler, state } = useForm({
    username: "",
    email: "",
    password: "",
  });
  function submitHandler() {}
  return (
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
    </form>
  );
};

export default RegisterForm;
