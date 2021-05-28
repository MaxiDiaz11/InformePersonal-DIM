import React, { Fragment } from "react";
import {
  getColumnasInformeDiario,
  getFilasInformeDiario,
} from "../utils/utilsTable";
import Tabla from "./Tabla";

const TablaSubGrupo = ({ grupo, subgrupo }) => {
  return (
    <Fragment>
      {subgrupo.map((subT) => {
        console.log(subT);
        let columnas = getColumnasInformeDiario(
          grupo.tipo_template,
          subT.tipo_template
        );
        let filas = getFilasInformeDiario(grupo, subT);

        return (
          <Tabla
            columns={columnas}
            data={filas}
            subtitulo={subT.nombre_subgrupo}
          />
        );
      })}
    </Fragment>
  );
};

export default TablaSubGrupo;
