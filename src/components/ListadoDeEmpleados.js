import React, { Fragment } from "react";
import { getColumnasListadoEmpleados } from "../utils/utilsTable";
import Tabla from "./Tabla";
import Titulo from "../components/Titulo";

const ListadoDeEmpleados = ({ empleados, titulo }) => {
  console.log(empleados);
  const columnas = getColumnasListadoEmpleados();
  console.log(columnas);

  return (
    <Fragment>
      <Titulo titulo={titulo} />
      <Tabla columns={columnas} data={empleados} tipoTabla="listadoEmpleados" pageSize={5} />
    </Fragment>
  );
};

export default ListadoDeEmpleados;
