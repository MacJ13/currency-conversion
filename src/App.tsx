import Header from "./components/header/Header";
import SplitPane from "./components/pane/SplitPane";
import Currency from "./features/currency/Currency";

import Print from "./features/print/Print";

function App() {
  return (
    <>
      <Header />
      <SplitPane left={<Currency />} right={<Print />} />
    </>
  );
}

export default App;
