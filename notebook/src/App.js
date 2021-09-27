import "./App.css";
import { Footer, Header, Main, Notebook } from "./components/layout";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Notebook />
      </Main>
      <Footer />
    </>
  );
}

export default App;
