import { InputProps } from "../../utils/types/components";

const Input = ({ checked = false, input, onChange }: InputProps) => {
  const { type, name, id, value } = input;
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      checked={checked}
    />
  );
};

export default Input;
