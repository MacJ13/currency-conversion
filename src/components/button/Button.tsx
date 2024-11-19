import { ButtonProps } from "../../utils/types/components";

const Button = ({ className, children, disabled, onClick }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
