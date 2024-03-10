import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Cards />
      <ToastContainer />
    </div>
  );
}

export default App;
