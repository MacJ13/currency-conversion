import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/Button";
import Flex from "../../components/flex/Flex";
import Heading from "../../components/heading/Heading";
import {
  addField,
  selectInvoicesField,
} from "../../redux/invoices/invoicesSlice";
import InvoiceField from "./InvoiceField";
// import Input from "../../components/input/Input";
// import Label from "../../components/label/Label";

const Invoices = () => {
  const invoices = useSelector(selectInvoicesField);

  const dispatch = useDispatch();

  const invoiceFields = invoices.map((invoice) => (
    <InvoiceField key={invoice.id} invoice={invoice} />
  ));

  return (
    <div className="border-2 w-11/12 m-auto p-2">
      <Heading type="h2" className="text-2xl semi-bold text-center mb-4">
        3. Wprowadź dane z faktur
      </Heading>
      <Flex className="flex flex-col gap-4">
        {/* <Flex className="flex relative items-center gap-8 border-2 px-2 py-4">
          <Flex className="flex flex-col w-20">
            <Label htmlFor="invoiceAmount" className="font-semibold">
              Kwota:
            </Label>
            <Input
              input={{
                type: "text",
                name: "invoiceAmount",
                id: "invoiceAmount",
                value: "",
              }}
              className="font-semibold bg-blue-100 border border-gray-300 text-gray-
          900 text-sm rounded-md focus:outline-none focus:border-blue-400 
          block w-14 p-1 w-full"
              onChange={() => {
                console.log("change");
              }}
            />
          </Flex>
          <Flex className="flex-1 flex flex-col">
            <Label htmlFor="invoiceDesc" className="font-semibold">
              Opis:
            </Label>
            <Input
              input={{
                type: "text",
                name: "invoiceDesc",
                id: "invoiceDesc",
                value: "",
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
              console.log("delete");
            }}
          >
            &#10005;
          </Button>
        </Flex> */}
        {invoiceFields}

        <Flex className="flex justify-center">
          <Button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded  opacity-100 disabled:opacity-50 "
            onClick={() => {
              dispatch(addField());
            }}
          >
            Dodaj
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default Invoices;
