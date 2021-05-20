import React, { useState, useEffect } from "react";
import Inicio from "./pages/Inicio";
import consultarAPI from "././utils/utils";

function App() {
  const [empleados, setEmpleados] = useState([]);

  const obtenerEmpleados = () => {
    const resultado = consultarAPI(
      "http://127.0.0.1:3000/empleado/obtenerEmpleados"
    );
    resultado.then((r) => setEmpleados(r.data.empleado));
  };

  useEffect(() => {
    obtenerEmpleados();
  }, []);

  return (
    <div className="App">
      <Inicio empleados={empleados}></Inicio>
    </div>
  );
}

export default App;
