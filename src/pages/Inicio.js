import React, { useState } from "react";
import styled from "styled-components";
import Titulo from "../components/Titulo";
import ListadoDeEmpleados from "../components/ListadoDeEmpleados";

const Inicio = ({ empleados }) => {
  const [viewEmpleados, setViewEmpleados] = useState(false);
  const [viewInformeDiario, setViewInformeDiario] = useState(false);

  const Contenedor = styled.div`
    background: #9c9c9c;
    min-height: 100vh;
    border-right: 2px solid black;
  `;

  const Boton = styled.button`
    border: 2px solid black;
    margin: 30px;
    padding: 20px;
    border-radius: 10px;
    font-size: 20px;
    background-color: white;
  `;

  const getTableEmpleado = () => {
    setViewEmpleados(true);
    setViewInformeDiario(false);
  };

  const getTableInforme = () => {
    setViewEmpleados(false);
    setViewInformeDiario(true);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Contenedor className="col-3 d-flex flex-column justify-content-center">
          <Boton onClick={getTableInforme}> Informe diario</Boton>
          <Boton onClick={getTableEmpleado}>Listado de empleados</Boton>
        </Contenedor>
        <div className="col-9">
          <Titulo titulo="Informe de Personal" />
          {viewEmpleados ? <ListadoDeEmpleados /> : null}
          {viewInformeDiario ? <h1>entra informe</h1> : null}
        </div>
      </div>
    </div>
  );
};

export default Inicio;
