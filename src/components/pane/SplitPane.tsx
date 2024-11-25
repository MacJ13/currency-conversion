import { useRef } from "react";
import { SplitPaneProps } from "../../utils/types/components";
import { useReactToPrint } from "react-to-print";
import Flex from "../flex/Flex";

const SplitPane = ({ left, right }: SplitPaneProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <div className="flex flex-1 w-full relative ">
      <Flex className="absolute top-0 right-0 flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded  opacity-100 disabled:opacity-50"
          onClick={() => {
            reactToPrintFn();
          }}
        >
          Drukuj
        </button>
      </Flex>
      <div className=" flex-1 bg-[#fafdff] border-r-4 border-dashed border-sky-800 py-5">
        {left}
      </div>
      <div ref={contentRef} className="flex-1 py-5">
        {right}
      </div>
    </div>
  );
};

export default SplitPane;
