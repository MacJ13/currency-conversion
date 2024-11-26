import Flex from "../../components/flex/Flex";
import Heading from "../../components/heading/Heading";
import ButtonNbp from "./ButtonNbp";

import FieldNBP from "./fieldNbp";

const CurrencyEntryNbp = () => {
  return (
    <Flex className="flex gap-3 flex-col items-center justify-center ">
      <Heading
        type="h2"
        className="text-2xl font-semibold text-center tracking-wide mb-4"
      >
        2. Wypełnij dane (dla nbp)
      </Heading>
      <FieldNBP type="nbpBase" />
      <FieldNBP type="nbpCurrent" />
      <ButtonNbp />
    </Flex>
  );
};

export default CurrencyEntryNbp;
