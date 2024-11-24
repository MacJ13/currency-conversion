import { useDispatch } from "react-redux";
import Button from "../../components/button/Button";
import Flex from "../../components/flex/Flex";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import useFractionInput from "../../hooks/useFractionInput";
import { InvoiceFieldProps } from "../../utils/types/components";
import { removeField } from "../../redux/invoices/invoicesSlice";

const InvoiceField = ({ invoice }: InvoiceFieldProps) => {
  const { inputValue, numberValue, handleNumberChange } = useFractionInput();

  const dispatch = useDispatch();

  const fieldAmount = "amount" + invoice.id;
  const fieldDescription = "desc" + invoice.id;

  return (
    <Flex className="flex relative items-center gap-8 border-2 px-2 py-4">
      <Flex className="flex flex-col w-24">
        <Label htmlFor={fieldAmount} className="font-semibold">
          Kwota:
        </Label>
        <Input
          input={{
            type: "number",
            name: fieldAmount,
            id: fieldAmount,
            value: inputValue,
          }}
          className="font-semibold bg-blue-100 border border-gray-300 text-gray-
    900 text-sm rounded-md focus:outline-none focus:border-blue-400 
    block w-14 p-1 w-full"
          onChange={(e) => {
            handleNumberChange(e.target.value);
          }}
        />
      </Flex>
      <Flex className="flex-1 flex flex-col">
        <Label htmlFor={fieldDescription} className="font-semibold">
          Opis:
        </Label>
        <Input
          input={{
            type: "text",
            name: fieldDescription,
            id: fieldDescription,
            value: invoice.description,
          }}
          className="font-semibold bg-blue-100 border border-gray-300 text-gray-
    900 text-sm rounded-md focus:outline-none focus:border-blue-400 
    block w-14 p-1 w-full"
          onChange={() => {
            console.log("change");
          }}
        />
      </Flex>
      <Button
        //   absolute top-1 right-1
        className="flex relative top-2.5 justify-center items-center text-white bg-red-700 font-black rounded-3xl w-7 h-7 "
        onClick={() => {
          dispatch(removeField(invoice.id));
        }}
      >
        &#10005;
      </Button>
    </Flex>
  );
};

export default InvoiceField;
