import { SplitPaneProps } from "../../utils/types/components";

const SplitPane = ({ left, right }: SplitPaneProps) => {
  return (
    <div className="flex flex-1">
      <div className="flex-1 bg-[#fafdff] border-r-4 border-dashed border-sky-800 py-5">
        {left}
      </div>
      <div className="flex-1 py-5">{right}</div>
    </div>
  );
};

export default SplitPane;
