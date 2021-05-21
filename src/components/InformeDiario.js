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

          if (g.subgrupo.length > 1) {
            nombreGrupo = g.nombre;
            console.log(nombreGrupo);

            for (let i = 0; i < g.subgrupo.length; i++) {

              nombreSubGrupo = g.subgrupo[i].nombre_subgrupo;
              console.log(nombreSubGrupo);

              let columnas = getColumnasInformeDiario(
                g.tipo_template,
                g.subgrupo[i].tipo_template
              );

              let filas = getFilasInformeDiario(g, g.subgrupo[i]);

              console.log(columnas);
              console.log(filas);

               <TablaSubGrupo/>

              // let tabla = getTable(columnas, filas, nombreSubGrupo, nombreGrupo);

              //   return (
              //     <Tabla
              //       columns={columnas}
              //       data={filas}
              //       titulo={nombreSubGrupo}
              //       nombre={nombreGrupo}
              //     />
              //   );
            }
          }
        }
      })}
    </Fragment>
  );
};

export default InformeDiario;
