import React, { useState } from "react";
import styled from "styled-components";
import ListadoDeEmpleados from "../components/ListadoDeEmpleados";
import Principal from "../components/Principal";
import InformeDiario from "../components/InformeDiario";

const Inicio = ({ empleados, gruposInforme }) => {

  const [viewEmpleados, setViewEmpleados] = useState(false);
  const [viewInformeDiario, setViewInformeDiario] = useState(false);
  const [viewPrincipal, setViewPrincipal] = useState(true);

  const Contenedor = styled.div`
    background: #5eb86a;
    min-height: 100vh;
    border-right: 0.5px solid gray;
  `;

  const Boton = styled.button`
    border: 2px solid black;
    margin: 15px;
    padding: 10px;
    border-radius: 10px;
    font-size: 20px;
    background-color: white;
    word-wrap: break-word;
  `;

  const BtnContenedor = styled.div`
  margin-top: 150px;
  `

  const getInicio = () => {
    setViewEmpleados(false);
    setViewInformeDiario(false);
    setViewPrincipal(true);
  };
  const getTableEmpleado = () => {
    setViewEmpleados(true);
    setViewInformeDiario(false);
    setViewPrincipal(false);
  };
  const getTableInforme = () => {
    setViewEmpleados(false);
    setViewInformeDiario(true);
    setViewPrincipal(false);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Contenedor className="col-3 ">
          <BtnContenedor className=" d-flex flex-column justify-content-start">
            <Boton onClick={getInicio}>Inicio</Boton>
            <Boton onClick={getTableInforme}> Informe diario</Boton>
            <Boton onClick={getTableEmpleado}>Listado de empleados</Boton>
          </BtnContenedor>
        </Contenedor>
        <div className="col-9">
          {viewEmpleados ? (
            <ListadoDeEmpleados
              empleados={empleados}
              titulo="Listado de Empleados"
            />
          ) : null}
          {viewInformeDiario ? <InformeDiario titulo="Informe diario" gruposInforme={gruposInforme} /> : null}
          {viewPrincipal ? (
            <Principal titulo="Gestion de empleados"></Principal>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Inicio;
