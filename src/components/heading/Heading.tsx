import { HeadingProps } from "../../utils/types/components";

const Heading = ({ type = "h1", className, children }: HeadingProps) => {
  if (type === "h1") return <h1 className={className}>{children}</h1>;
  else if (type === "h2") return <h2 className={className}>{children}</h2>;

  return <h1 className={className}>{children}</h1>;
};

export default Heading;
