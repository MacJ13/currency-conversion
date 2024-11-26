import { useRef } from "react";
import { SplitPaneProps } from "../../utils/types/components";
import { useReactToPrint } from "react-to-print";
import Flex from "../flex/Flex";
import Button from "../button/Button";
import { useSelector } from "react-redux";
import {
  selectCurrencyRate,
  selectNBPError,
} from "../../redux/currency/currencySlice";

const SplitPane = ({ left, right }: SplitPaneProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const conversionRate = useSelector(selectCurrencyRate);
  const error = useSelector(selectNBPError);

  const reactToPrintFn = useReactToPrint({
    contentRef,
  });

  const show = Boolean(conversionRate) || Boolean(error);

  return (
    <div className="flex flex-1 w-full relative ">
      <Flex className="absolute top-0 right-[5rem] flex justify-center">
        {show && (
          <Button
            onClick={() => {
              reactToPrintFn();
            }}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded  opacity-100 disabled:opacity-50"
          >
            drukuj
          </Button>
        )}
      </Flex>
      <div className=" flex-1 bg-[#fafdff] border-r-2 border-sky-800">
        {left}
      </div>
      <div ref={contentRef} className="flex-1 py-5">
        {right}
      </div>
    </div>
  );
};

export default SplitPane;
