import React from "react";
import styled from "styled-components";

const Inicio = () => {
  const Contenedor = styled.div`
    background: #9c9c9c;
    min-height: 100vh;
  `;

  const Boton = styled.button`
    border: 2px solid black;
    margin: 30px;
    padding: 20px;
    border-radius: 10px;
    font-size:20px;
    background-color: white;
  `;

  return (
    <div className="container-fluid">
      <div className="row">
        <Contenedor className="col-3 d-flex flex-column justify-content-center">
          <Boton> Informe diario</Boton>
          <Boton>Listado de empleados</Boton>
        </Contenedor>
        <div className="col-9">
            <h1 class="text-center mt-4">Informe personal</h1>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
