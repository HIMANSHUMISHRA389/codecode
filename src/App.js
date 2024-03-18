import "./App.css";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Home2 from "./components/Home2";
import Middle from "./components/Middle";
import Last from "./components/Last";
function App() {
  return (
    <>
    <Header/>
      <Home />
      <Home2/>
      <Middle/>
      <Last/>
      <Footer />
    </>
  );
}

export default App;
