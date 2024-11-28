import { useDispatch, useSelector } from "react-redux";
import Flex from "../../components/flex/Flex";
import Heading from "../../components/heading/Heading";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import {
  chooseOrigin,
  selectCurrencyOrigin,
} from "../../redux/currency/currencySlice";
import { RADIO_BUTTONS_DATA } from "../../utils/constants/constants";
import { CurrencyOrigin as Origin } from "../../redux/types/currency";
import { clearNBP } from "../../redux/nbp/nbpSlice";
import { initInvoices } from "../../redux/invoices/invoicesSlice";

const CurrencyOrigin = () => {
  const dispatch = useDispatch();

  const origin = useSelector(selectCurrencyOrigin);

  const radioButtons = RADIO_BUTTONS_DATA.map((radioBtn) => {
    const checked = origin === radioBtn.value;

    const labelClassname = checked ? "font-semibold" : "";

    const flexClassname = checked ? "" : "opacity-80 hover:opacity-100";

    return (
      <Flex key={radioBtn.id} className={`flex gap-3 ${flexClassname}`}>
        <Input
          checked={checked}
          input={radioBtn}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => {
            const origin = e.target.value as Origin;
            dispatch(chooseOrigin(origin));
            dispatch(clearNBP());
            dispatch(initInvoices());
          }}
        />
        <Label className={labelClassname} htmlFor={radioBtn.id}>
          {radioBtn.label}
        </Label>
      </Flex>
    );
  });

  return (
    <div className="border-b-2 py-7 border-sky-800">
      <Heading
        type="h2"
        className="text-2xl font-semibold text-center tracking-wide mb-4"
      >
        {"1. Wybierz rodzaj pochodzenia:"}
      </Heading>
      <Flex className="flex justify-center gap-6">{radioButtons}</Flex>
    </div>
  );
};

export default CurrencyOrigin;
