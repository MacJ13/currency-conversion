import { LabelProps } from "../../utils/types/components";

const Label = ({ className = "", children, htmlFor }: LabelProps) => {
  return (
    <label className={className} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
