import { useDispatch } from "react-redux";
import Button from "../../components/button/Button";
import Flex from "../../components/flex/Flex";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import useFractionInput from "../../hooks/useFractionInput";
import { InvoiceFieldProps } from "../../utils/types/components";
import { removeField, updateField } from "../../redux/invoices/invoicesSlice";
import { useState } from "react";

const InvoiceField = ({ invoice }: InvoiceFieldProps) => {
  const { inputValue, numberValue, handleNumberChange } = useFractionInput();

  const [description, setDescription] = useState<string>("");
  const dispatch = useDispatch();

  const fieldAmount = "amount" + invoice.id;
  const fieldDescription = "desc" + invoice.id;

  return (
    <Flex className="flex relative items-start gap-5 px-4">
      <Flex className="flex flex-col w-24">
        <Label htmlFor={fieldAmount} className="font-semibold">
          Kwota
        </Label>
        <Input
          input={{
            type: "number",
            name: fieldAmount,
            id: fieldAmount,
            value: inputValue,
          }}
          className="font-semibold text-base  bg-blue-100 border border-blue-200  text-gray-
             900 text-sm rounded focus:outline-none focus:border-blue-400 
             block p-1.5 h-[2.125rem] pl-2"
          onChange={(e) => {
            handleNumberChange(e.target.value);
          }}
        />
      </Flex>
      <Flex className="flex-1 flex flex-col">
        <Label htmlFor={fieldDescription} className="font-semibold">
          Opis
        </Label>
        <Input
          input={{
            type: "textarea",
            name: fieldDescription,
            id: fieldDescription,
            value: description,
          }}
          className="font-semibold text-base  bg-blue-100 border border-blue-200  text-gray-
             900 text-sm rounded focus:outline-none focus:border-blue-400 
             block w-full h-[2.125rem] p-1.5 pl-2 resize-y"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </Flex>
      <Flex className="flex gap-4">
        <Button
          disabled={!inputValue || !description}
          //   absolute top-1 right-1
          className="flex relative top-6 active:top-5.5 text-sm active:opacity-85 justify-center items-center text-white bg-blue-500  font-semibold px-3 py-1.5 rounded disabled:opacity-50"
          // className="flex relative top-2.5 justify-center items-center text-white bg-blue-500 font-black rounded-3xl w-7 h-7 "
          onClick={() => {
            if (!numberValue) return;

            const field = { id: invoice.id, description, amount: numberValue };
            dispatch(updateField(field));
          }}
        >
          &#43;
          {/* &#8644; */}
        </Button>
        <Button
          //   absolute top-1 right-1
          className="flex relative top-6 active:top-5.5 text-sm active:opacity-85 justify-center items-center text-white bg-red-600  font-semibold px-3 py-2 rounded"
          onClick={() => {
            dispatch(removeField(invoice.id));
          }}
        >
          usuń
        </Button>
      </Flex>
    </Flex>
  );
};

export default InvoiceField;
