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
    <div>
      <Heading type="h3" className="mb-4 text-xl">
        {invoice.description}:
      </Heading>
      <div className="text-3xl">
        {formatDecimalPlaces(invoice.amount, 2)} {upperCase(counterCurrency)} /{" "}
        {currencyRate} {upperCase(counterCurrency)} &#8776;{" "}
        <span className="border-b-2 border-black text-4xl">
          {result} {upperCase(baseCurrency)}
        </span>
      </div>
    </div>
  );
};

export default PrintField;
