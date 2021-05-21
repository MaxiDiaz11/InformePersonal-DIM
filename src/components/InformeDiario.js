import React, { Fragment } from "react";
import Titulo from "../components/Titulo";
import {
  getColumnasInformeDiario,
  getFilasInformeDiario,
} from "../utils/utilsTable";
import Tabla from "./Tabla";

const InformeDiario = ({ titulo, gruposInforme }) => {
  console.log("informe diario");
  console.log(gruposInforme);
  return (
    <Fragment>
      <Titulo titulo={titulo} />

      {gruposInforme.grupo.map((g) => {
        let nombreGrupo, nombreSubGrupo;
        console.log(g);
        if (g.subgrupo === undefined) {
          nombreGrupo = g.nombre;
          let columnas = getColumnasInformeDiario(g.tipo_template);
          let filas = getFilasInformeDiario(g);

          console.log(columnas);
          console.log(filas);
          return (
            <Tabla
              columns={columnas}
              data={filas}
              tipoTabla="ListadoInformeDiario"
              titulo={nombreGrupo}
            />
          );
        } else {
          if (g.subgrupo.length === 1) {
            nombreSubGrupo = g.subgrupo[0].nombre_subgrupo;
            let columnas = getColumnasInformeDiario(g.tipo_template);
            let filas = getFilasInformeDiario(g);
            return (
              <Tabla columns={columnas} data={filas} titulo={nombreSubGrupo} />
            );
          }
        }
      })}
    </Fragment>
  );
};

export default InformeDiario;
