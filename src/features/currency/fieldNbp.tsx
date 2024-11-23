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

const FieldNBP = ({ type }: FieldNBPProps) => {
  const currentNbp = useSelector((state: RootState) => {
    return selectCurrentNbp(state, type);
  });

  const dispatch = useDispatch();

  const radioBtns = ["a", "b"].map((btn) => {
    return (
      <Flex className=" gap-2 items-center justify-center">
        <Flex className="flex gap-1  items-center justify-center">
          <Label className="font-semibold" htmlFor="baseCurrency">
            {btn}
          </Label>
          <Input
            checked={currentNbp.table === btn}
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
    <Flex className="flex items-center ">
      <Flex className="flex gap-2 mr-8">
        <Label htmlFor="">Tabela:</Label>

        {radioBtns}
      </Flex>
      <Flex className="flex items-center flex gap-2 w-56">
        <Label className="font-semibold w-36" htmlFor={currentNbp.type}>
          {currentNbp.label}
        </Label>
        <Input
          input={{
            type: "text",
            name: currentNbp.type,
            id: currentNbp.type,
            value: currentNbp.currency.toUpperCase(),
          }}
          className="font-semibold bg-blue-100 border border-gray-300 text-gray-
      900 text-sm rounded-md focus:outline-none focus:border-blue-400 
      block w-14 p-1"
          onChange={(e) => {
            const currency = e.target.value.toLowerCase();

            dispatch(enterNBPCurrency({ currency, type }));
          }}
        />
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
          className=" font-semibold bg-blue-100 border border-gray-300 text-gray-
      900 text-sm rounded-md focus:outline-none focus:border-blue-400 
      block w-22 p-1"
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
