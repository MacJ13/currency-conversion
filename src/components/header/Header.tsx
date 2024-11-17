import Heading from "../heading/Heading";

const Header = () => {
  const title = "Przeliczenie walut";

  return (
    <div className="header p-10 text-center bg-sky-800 font-mono text-slate-50">
      <Heading className="text-4xl uppercase font-semibold tracking-wide">
        {title}
      </Heading>
    </div>
  );
};

export default Header;
