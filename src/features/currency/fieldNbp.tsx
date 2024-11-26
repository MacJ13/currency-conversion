import Flex from "../../components/flex/Flex";
import Label from "../../components/label/Label";
import Input from "../../components/input/Input";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import { FieldNBPProps } from "../../utils/types/components";
import {
  changeNBPTable,
  enterNBPCurrency,
  enterNBPDate,
  selectCurrentNbp,
} from "../../redux/nbp/nbpSlice";
import { upperCase } from "../../utils/helpers/upperCase";

const FieldNBP = ({ type }: FieldNBPProps) => {
  const currentNbp = useSelector((state: RootState) => {
    return selectCurrentNbp(state, type);
  });

  const dispatch = useDispatch();

  const radioBtns = ["a", "b"].map((btn) => {
    const checked = currentNbp.table === btn;

    const opacity = checked ? " " : "opacity-80 hover:opacity-100";
    const bold = checked ? "font-semibold" : "font-normal ";

    return (
      <Flex
        key={btn}
        className={`gap-2 items-center justify-center ${opacity}`}
      >
        <Flex className="flex gap-1  items-center justify-center">
          <Label className={bold} htmlFor="baseCurrency">
            {upperCase(btn)}
          </Label>
          <Input
            checked={checked}
            input={{
              type: "radio",
              id: btn,
              name: currentNbp.type,
              value: btn,
            }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const currentTable = e.target.value as "a" | "b";

              dispatch(changeNBPTable({ table: currentTable, type }));
            }}
          />
        </Flex>
      </Flex>
    );
  });

  return (
    <Flex className="flex items-center gap-7">
      <Flex className="flex gap-2 mr-2">
        <div className="font-semibold">Tabela</div>

        {radioBtns}
      </Flex>
      <Flex className="flex items-center flex gap-2">
        <Input
          input={{
            type: "text",
            name: currentNbp.type,
            id: currentNbp.type,
            value: upperCase(currentNbp.currency),
          }}
          className="font-semibold text-base bg-blue-100 border border-blue-200  text-gray-
              900 text-sm rounded focus:outline-none focus:border-blue-400 
              block w-16 p-1.5 pl-2"
          onChange={(e) => {
            const currency = e.target.value.toLowerCase();

            dispatch(enterNBPCurrency({ currency, type }));
          }}
        />
        <Label className="font-semibold w-36" htmlFor={currentNbp.type}>
          {currentNbp.label}
        </Label>
      </Flex>
      <Flex className="flex gap-2 items-center">
        {/* <Label className="font-semibold" htmlFor={"date" + currentNbp.type}>
          data:
        </Label> */}
        <Input
          input={{
            type: "date",
            name: "date" + currentNbp.type,
            id: "date" + currentNbp.type,
            value: currentNbp.date,
          }}
          className="font-semibold text-base bg-blue-100 border border-blue-200  text-gray-
              900 text-sm rounded focus:outline-none focus:border-blue-400 
              block w-22 p-1.5 pl-2"
          onChange={(e) => {
            const date = e.target.value;
            dispatch(enterNBPDate({ type, date }));
          }}
        />
      </Flex>
    </Flex>
  );
};

export default FieldNBP;
