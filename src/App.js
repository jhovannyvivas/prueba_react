import Nombres from "./components/nombres";
import Busqueda from "./components/busqueda";

function App() {
  return (
    <div className="App">
      <Nombres key={1} />
      <Busqueda name="luke" />
    </div>
  );
}

export default App;
