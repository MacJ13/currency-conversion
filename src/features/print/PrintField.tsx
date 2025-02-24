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

  const resultClassName = `${
    !invoice.isObjectionVisible || !invoice.objection
<<<<<<< HEAD
      ? "border-b-2 border-black"
=======
      ? "underline underline-offset-8"
>>>>>>> feature/add-objection
      : ""
  } inline-block pb-1  text-2xl`;

  return (
    <div className="mb-5 last:mb-0 ">
      <Heading type="h3" className="mb-2 text-lg font-medium">
        {invoice.description}:
      </Heading>
      <div className="text-xl ml-3">
        <div className="mb-2">
          {formatDecimalPlaces(invoice.amount, 2)} {upperCase(counterCurrency)}{" "}
          / {formatDecimalPlaces(currencyRate, 4)} {upperCase(counterCurrency)}{" "}
          <span className="text-3xl">&#8776;</span>
        </div>
        <span className={resultClassName}>
          {result} {upperCase(baseCurrency)}
        </span>
      </div>
      {invoice.isObjectionVisible && invoice.objection && (
        <div className="text-xl ml-3">
          <div className="mb-2">
<<<<<<< HEAD
            <span className="border-b-2 inline-block pb-1 border-black text-2xl">
=======
            <span className="underline underline-offset-8 inline-block pb-1 text-2xl">
>>>>>>> feature/add-objection
              ({invoice.objection})
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrintField;
