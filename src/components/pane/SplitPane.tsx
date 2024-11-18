import { SplitPaneProps } from "../../utils/types/components";

const SplitPane = ({ left, right }: SplitPaneProps) => {
  return (
    <div className="flex p-5">
      <div className="flex-1">{left}</div>
      <div className="flex-1">{right}</div>
    </div>
  );
};

export default SplitPane;
