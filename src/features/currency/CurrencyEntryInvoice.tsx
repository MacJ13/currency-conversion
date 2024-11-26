import { useState } from "react";
import Flex from "../../components/flex/Flex";
import Heading from "../../components/heading/Heading";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import { useDispatch } from "react-redux";
import { countCurrencyFromInvoice } from "../../redux/currency/currencySlice";
import useFractionInput from "../../hooks/useFractionInput";
import Button from "../../components/button/Button";

const CurrencyEntryInvoice = () => {
  const { inputValue, numberValue, handleNumberChange } = useFractionInput();

  const [baseCurrency, setBaseCurrency] = useState<string>("");

  const [counterCurrency, setCounterCurrency] = useState<string>("");

  const dispatch = useDispatch();

  return (
    <Flex className="flex gap-5 flex-col items-center justify-center">
      <Heading
        type="h2"
        className="text-2xl font-semibold text-center tracking-wide mb-4"
      >
        2. Wypełnij dane (faktura)
      </Heading>
      <Flex className="flex flex-col">
        <Flex className="flex gap-2.5 mb-3 items-center">
          <Input
            className="font-semibold text-base bg-blue-100 border border-blue-200  text-gray-
           900 text-sm rounded focus:outline-none focus:border-blue-400 
           block w-16 p-1.5 pl-2"
            onChange={(e) => {
              setBaseCurrency(e.target.value.toUpperCase());
            }}
            input={{
              type: "text",
              name: "baseCurrency",
              id: "baseCurrency",
              value: baseCurrency,
            }}
          />
          <Label className="font-semibold w-36" htmlFor="baseCurrency">
            waluta bazowa
          </Label>
        </Flex>
        <Flex className="flex gap-4 justify-center mb-8">
          <Flex className="flex gap-2.5 items-center">
            <Input
              className="font-semibold text-base bg-blue-100 border border-blue-200  text-gray-
              900 text-sm rounded focus:outline-none focus:border-blue-400 
              block w-16 p-1.5 pl-2"
              onChange={(e) => {
                setCounterCurrency(e.target.value.toUpperCase());
              }}
              input={{
                type: "text",
                name: "counterCurrency",
                id: "counterCurrency",
                value: counterCurrency,
              }}
            />
            <Label className="font-semibold w-36" htmlFor="counterCurrency">
              waluta kwotowana
            </Label>
          </Flex>
          <Flex className="flex gap-2.5 items-center">
            <Input
              className="font-semibold text-base  bg-blue-100 border border-blue-200  text-gray-
             900 text-sm rounded focus:outline-none focus:border-blue-400 
             block w-24 p-1.5 pl-2"
              onChange={(e) => {
                handleNumberChange(e.target.value);
              }}
              input={{
                type: "number",
                name: "amountCurrency",
                id: "amountCurrency",
                value: inputValue,
              }}
            />
            <Label className="font-semibold" htmlFor="amountCurrency">
              wartość
            </Label>
          </Flex>
        </Flex>
        <Flex className="flex justify-center ">
          <Button
            onClick={() => {
              dispatch(
                countCurrencyFromInvoice({
                  baseCurrency: baseCurrency.toLowerCase(),
                  counterCurrency: counterCurrency.toLowerCase(),
                  rate: numberValue ? numberValue : 0,
                })
              );
            }}
            className="bg-blue-500 relative hover:bg-blue-400 active:top-1 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded  opacity-100 disabled:opacity-50 "
            disabled={
              counterCurrency === baseCurrency ||
              counterCurrency.length !== 3 ||
              baseCurrency.length !== 3 ||
              !Boolean(numberValue)
            }
          >
            Przelicz
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CurrencyEntryInvoice;
