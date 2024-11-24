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

const CurrencyOrigin = () => {
  const dispatch = useDispatch();

  const origin = useSelector(selectCurrencyOrigin);

  const radioButtons = RADIO_BUTTONS_DATA.map((radioBtn) => {
    const checked = origin === radioBtn.value;

    return (
      <>
        <Flex className="flex gap-3">
          <Input
            checked={checked}
            input={radioBtn}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const origin = e.target.value as Origin;
              dispatch(chooseOrigin(origin));
              dispatch(clearNBP());
            }}
          />
          <Label htmlFor={radioBtn.id}>{radioBtn.label}</Label>
        </Flex>
      </>
    );
  });

  return (
    <div>
      <Heading type="h2" className="text-2xl semi-bold text-center mb-4">
        {"1. Wybierz rodzaj pochodzenia:"}
      </Heading>
      <Flex className="flex justify-center gap-6 mb-8">{radioButtons}</Flex>
    </div>
  );
};

export default CurrencyOrigin;
