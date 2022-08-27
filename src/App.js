import "./App.css";
import CartWidget from "./Components/CartWidget";
import NavBar from "./Components/NavBar";

function App() {
  const estilos = {
    backgroundColor: "#1d1d1d",
    padding: "20px",
  };
  return (
    <div>
      <NavBar></NavBar>
      <h1 style={estilos}>Mi primer react App</h1>
      <CartWidget></CartWidget>
    </div>
  );
}

export default App;
