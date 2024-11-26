import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/Button";
import Flex from "../../components/flex/Flex";
import Heading from "../../components/heading/Heading";
import {
  addField,
  selectInvoicesField,
} from "../../redux/invoices/invoicesSlice";
import InvoiceField from "./InvoiceField";
import { selectCurrencyRate } from "../../redux/currency/currencySlice";
// import Input from "../../components/input/Input";
// import Label from "../../components/label/Label";

const Invoices = () => {
  const invoices = useSelector(selectInvoicesField);
  const currencyRate = useSelector(selectCurrencyRate);

  const dispatch = useDispatch();

  const invoiceFields = invoices.map((invoice) => (
    <InvoiceField key={invoice.id} invoice={invoice} />
  ));

  if (!currencyRate) return null;

  return (
    <div className="py-7 w-[100%] m-auto">
      <Heading
        type="h2"
        className="text-2xl font-semibold text-center tracking-wide mb-4"
      >
        3. Wprowadź dane z faktur
      </Heading>
      <Flex className="flex flex-col gap-5">
        {invoiceFields}

        <Flex className="flex justify-center">
          <Button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded  opacity-100 disabled:opacity-50 "
            onClick={() => {
              dispatch(addField());
            }}
          >
            dodaj dane z faktury
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default Invoices;
