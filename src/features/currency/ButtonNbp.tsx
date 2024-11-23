import { useSelector } from "react-redux";
import Button from "../../components/button/Button";

import { isDisabledNbpButton } from "../../redux/nbp/nbpSlice";

const ButtonNbp = () => {
  const disabled = useSelector(isDisabledNbpButton);

  // const nbpTable = useSelector(selectNBPTable);

  return (
    <Button
      disabled={disabled}
      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded  opacity-100 disabled:opacity-50"
      onClick={() => {
        // console.log(nbpdata);
        console.log("click");
      }}
    >
      następny krok
    </Button>
  );
};

export default ButtonNbp;
