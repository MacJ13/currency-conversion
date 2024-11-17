import { FlexProps } from "../../utils/types/components";

const Flex = ({ children, className }: FlexProps) => {
  return <div className={className}>{children}</div>;
};

export default Flex;
