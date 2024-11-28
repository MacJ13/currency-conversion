import { InputProps } from "../../utils/types/components";

const Input = ({
  className = "",
  checked = false,
  input,
  onChange,
}: InputProps) => {
  const { type, name, id, value } = input;

  // Construct addtional props based on the type
  const additionalProps = {
    ...(type === "radio" && { checked }),
  };

  if (type === "textarea") {
    return (
      <textarea
        className={className}
        value={value}
        name={name}
        id={id}
        onChange={onChange}
      ></textarea>
    );
  }

  return (
    <input
      className={className}
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      {...additionalProps} // Spread dynamically constructed props
    />
  );
};

export default Input;
