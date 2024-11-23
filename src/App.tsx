import Header from "./components/header/Header";
import SplitPane from "./components/pane/SplitPane";
import Currency from "./features/currency/Currency";

function App() {
  return (
    <>
      <Header />
      <SplitPane left={<Currency />} right={<div>printer</div>} />
    </>
  );
}

export default App;
