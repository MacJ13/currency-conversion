import Heading from "../../components/heading/Heading";
import { Invoice } from "../../redux/types/invoices";
import { formatDecimalPlaces } from "../../utils/helpers/formatDecimalPlaces";
import { upperCase } from "../../utils/helpers/upperCase";

type PrintField = {
  invoice: Invoice;
  baseCurrency: string;
  counterCurrency: string;
  currencyRate: number;
};

const PrintField = ({
  invoice,
  baseCurrency,
  counterCurrency,
  currencyRate,
}: PrintField) => {
  const result = formatDecimalPlaces(invoice.amount / currencyRate, 2);

  return (
    <div className="mb-5 last:mb-0 ">
      <Heading type="h3" className="mb-2 text-xl">
        {invoice.description}:
      </Heading>
      <div className="text-xl ml-3">
        <div className="mb-2">
          {formatDecimalPlaces(invoice.amount, 2)} {upperCase(counterCurrency)}{" "}
          / {currencyRate} {upperCase(counterCurrency)}{" "}
          <span className="text-3xl">&#8776;</span>
        </div>
        <span className="border-b-2 inline-block pb-1 border-black text-2xl">
          {result} {upperCase(baseCurrency)}
        </span>
      </div>
    </div>
  );
};

export default PrintField;
