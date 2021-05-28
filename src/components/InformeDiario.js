import React, { Fragment } from "react";
import Titulo from "../components/Titulo";
import {
  getColumnasInformeDiario,
  getFilasInformeDiario,
} from "../utils/utilsTable";
import Tabla from "./Tabla";
import TablaSubGrupo from "./TablaSubGrupo";

const InformeDiario = ({ titulo, gruposInforme }) => {
  console.log("informe diario");
  console.log(gruposInforme);

  return (
    <Fragment>
      <Titulo titulo={titulo} />

      {gruposInforme.grupo.map((g) => {
        let nombreGrupo, nombreSubGrupo;
        if (g.subgrupo === undefined) {
          nombreGrupo = g.nombre;
          let columnas = getColumnasInformeDiario(g.tipo_template);
          let filas = getFilasInformeDiario(g);

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

          if (g.subgrupo.length > 1) {
            nombreGrupo = g.nombre;
            return (
              <Fragment>
                <h2 className="mt-4 text-center ">{nombreGrupo}</h2>
                <TablaSubGrupo grupo={g} subgrupo={g.subgrupo} nombreGrupo={nombreGrupo} />
              </Fragment>
            )
          }
        }
      })}
    </Fragment>
  );
};

export default InformeDiario;
