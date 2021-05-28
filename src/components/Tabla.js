import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from '@material-ui/core/TablePagination';
import Paper from "@material-ui/core/Paper";
import "../css/tabla.css";


const Tabla = ({ columns, data, tipoTabla, titulo, subtitulo }) => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <div>
      {titulo ? <h2 className="mt-3 text-center ">{titulo}</h2> : null}
      {subtitulo ? (
        <h4 className="mt-4 text-center">{subtitulo}</h4>
      ) : null}

      <TableContainer component={Paper}>
        <Table >
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell align="center">{col.Header}</TableCell>
              ))}
            </TableRow>
          </TableHead>


          <TableBody>

            {tipoTabla === "listadoEmpleados"
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((fila) => (
                <TableRow key={Math.random() * (1000 - 1) + 1}>
                  <TableCell align="center"> {fila.nro_afiliado}</TableCell>
                  <TableCell align="center">{fila.nombre}</TableCell>
                  <TableCell align="center">{fila.apellido}</TableCell>
                  <TableCell align="center">{fila.observacion}</TableCell>
                  <TableCell align="center">
                    {fila.horario_laboral_desde}
                  </TableCell>
                  <TableCell align="center">
                    {fila.horario_laboral_hasta}
                  </TableCell>
                  <TableCell align="center">{fila.fecha_ingreso}</TableCell>
                </TableRow>
              ))
              :
              data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((fila) => (
                <TableRow key={Math.random() * (1000 - 1) + 1}>
                  <TableCell align="center"> {fila.nro_afiliado}</TableCell>
                  <TableCell align="center">{fila.nombre}</TableCell>
                  <TableCell align="center">{fila.apellido}</TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 30, 40]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default Tabla;
