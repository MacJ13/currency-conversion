export const getNbpLink = (nbpNo: string, date: string) => {
  const replacedNbpNo = nbpNo.split("/").join("-").toLowerCase();

  return `https://nbp.pl/archiwum-kursow/tabela-nr-${replacedNbpNo}-z-dnia-${date}/`;
};
