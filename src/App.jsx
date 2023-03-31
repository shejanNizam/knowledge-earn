import "./App.css";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
