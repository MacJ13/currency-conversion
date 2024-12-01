import { convertDate } from "../../utils/helpers/convertDate";
import { getNbpLink } from "../../utils/helpers/getNbpLink";
import { LinkNBPProps } from "../../utils/types/components";

const LinkNBP = ({ issue, date }: LinkNBPProps) => {
  const dateNBP = convertDate(date, "/");

  const href = getNbpLink(issue, date);

  return (
    <a target="_blank" href={href}>
      z dnia {dateNBP}
    </a>
  );
};

export default LinkNBP;
