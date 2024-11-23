import Flex from "../../components/flex/Flex";
import Heading from "../../components/heading/Heading";
import ButtonNbp from "./ButtonNbp";

import FieldNBP from "./fieldNbp";

const CurrencyEntryNbp = () => {
  return (
    <Flex className="flex gap-5 flex-col items-center justify-center">
      <Heading type="h3" className="text-xl text-center mb-2">
        1a. Wypełnij dane (dla nbp)
      </Heading>
      <FieldNBP type="nbpBase" />
      <FieldNBP type="nbpCurrent" />
      <ButtonNbp />
    </Flex>
  );
};

export default CurrencyEntryNbp;
