import { ChangeEventHandler, FC, ReactNode } from "react";

interface Props {
  type: "text" | "email" | "password";
  changeHandler: ChangeEventHandler<HTMLInputElement>;
  value: number | string;
  name: string;
  text: string;
  required?: boolean;
  children?: ReactNode;
}

const InputText: FC<Props> = ({ children, type, required, changeHandler, value, name, text }) => {
  return (
    <div className="relative flex flex-col">
      <label className="text-gray-500 font-semibold capitalize text-lg" htmlFor={name}>
        {text}
      </label>
      <input
        id={name}
        name={name}
        className="shadow-md border border-gray-400 text-base px-2 py-1 rounded-md outline-none"
        value={value}
        type={type}
        onChange={changeHandler}
        required={!!required}
        placeholder=" "
      ></input>
      {children}
    </div>
  );
};

export default InputText;
