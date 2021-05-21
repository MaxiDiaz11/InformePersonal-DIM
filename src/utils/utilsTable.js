//! OBTENER COLUMNAS DE LISTADO DE EMPLEADOS
const getColumnasListadoEmpleados = () => {
  return [
    {
      Header: "Numero Afiliado",
      accessor: "nro_afiliado",
    },
    {
      Header: "Nombre",
      accessor: "nombre",
    },
    {
      Header: "Apellido",
      accessor: "apellido",
    },
    {
      Header: "Observacion",
      accessor: "observacion",
    },
    {
      Header: "Hora desde",
      accessor: "horario_laboral_desde",
    },
    {
      Header: "Hora hasta",
      accessor: "horario_laboral_hasta",
    },
    {
      Header: "Fecha de Ingreso",
      accessor: "fecha_ingreso",
    },
  ];
};

// //!OBTENER DATOS TEMPLATE DE INFORME DIARIO
// //!FUNCION PARA QUE TE DEVUELVA LOS TEMPLATES DE TABLAS DE INFORME
const getDatosTemplate_Fiscalizacion = (tipo, grupo, datosTemplate) => {
  if (tipo === "GRUPO") {
    datosTemplate = grupo.empleados;
  }
  if (tipo === "SUBGRUPO") {
    datosTemplate = grupo.subgrupo[0].empleados;
  }
  return datosTemplate;
};
const getDatosTemplate_ContratosTemporarios = (tipo, grupo, datosTemplate) => {
  if (tipo === "GRUPO") {
    datosTemplate = grupo.empleados;
  }
  if (tipo === "SUBGRUPO") {
    datosTemplate = grupo.subgrupo[0].empleados;
  }
  return datosTemplate;
};
const getDatosTemplate_Ordenanzas = (tipo, grupo, datosTemplate) => {
  if (tipo === "GRUPO") {
    datosTemplate = grupo.empleados;
  }
  if (tipo === "SUBGRUPO") {
    datosTemplate = grupo.subgrupo[0].empleados;
  }
  console.log(datosTemplate);
  return datosTemplate;
};
const getDatosTemplate_General = (tipo, grupo, datosTemplate) => {
  if (tipo === "GRUPO") {
    datosTemplate = grupo.empleados;
  }
  if (tipo === "SUBGRUPO") {
    datosTemplate = grupo.empleados;
  }
  return datosTemplate;
};

// //!OBTENER FILAS INFORME DIARIO
const getFilasInformeDiario = (grupo, subgrupo = []) => {
  let datosTemplate = [];
  if (grupo.subgrupo === undefined) {
    // GRUPOS
    if (grupo.tipo_template === "TEMPLATE_FISCALIZACION") {
      datosTemplate = getDatosTemplate_Fiscalizacion(
        "GRUPO",
        grupo,
        datosTemplate
      );
    }
    if (grupo.tipo_template === "TEMPLATE_CONTRATOS_TEMPORARIOS") {
      datosTemplate = getDatosTemplate_ContratosTemporarios(
        "GRUPO",
        grupo,
        datosTemplate
      );
    }
    if (grupo.tipo_template === "TEMPLATE_ORDENANZAS") {
      datosTemplate = getDatosTemplate_Ordenanzas(
        "GRUPO",
        grupo,
        datosTemplate
      );
    }
    if (grupo.tipo_template === "TEMPLATE_GENERAL") {
      datosTemplate = getDatosTemplate_General(
        "GRUPO",
        subgrupo,
        datosTemplate
      );
    }
  } else {
    //SUBGRUPOS
    if (grupo.subgrupo.empleados === undefined) {
      if (grupo.tipo_template === "TEMPLATE_GENERAL") {
        datosTemplate = getDatosTemplate_General(
          "SUBGRUPO",
          subgrupo,
          datosTemplate
        );
      }
      if (grupo.tipo_template === "TEMPLATE_FISCALIZACION") {
        datosTemplate = getDatosTemplate_Fiscalizacion(
          "SUBGRUPO",
          grupo,
          datosTemplate
        );
      }
      if (grupo.tipo_template === "TEMPLATE_CONTRATOS_TEMPORARIOS") {
        datosTemplate = getDatosTemplate_ContratosTemporarios(
          "SUBGRUPO",
          grupo,
          datosTemplate
        );
      }
      if (grupo.tipo_template === "TEMPLATE_ORDENANZAS") {
        datosTemplate = getDatosTemplate_Ordenanzas(
          "SUBGRUPO",
          grupo,
          datosTemplate
        );
      }
    }
    // else {
    //   // VALORES `POR DEFECTO`
    //   if (
    //     grupo.tipo_template === undefined ||
    //     grupo.tipo_template === "" ||
    //     grupo === undefined
    //   ) {
    //     getValoresPorDefecto();
    //   }
    // }
  }
  return datosTemplate;
};

// //!OBTENER COLUMNAS INFORME DIARIO

const obtenerColumnasInformeDiario = (tipoTemplate, templateSubgrupo = "") => {
  if (tipoTemplate === "TEMPLATE_FISCALIZACION") {
    const template = [
      {
        Header: "Numero Afiliado",
        accessor: "nro_afiliado",
      },
      {
        Header: "Nombre",
        accessor: "nombre",
      },
      {
        Header: "Apellido",
        accessor: "apellido",
      },
      {
        Header: "Hora",
        accessor: "horarioDesde",
      },
      {
        Header: "Firma",
        accessor: "firmaEntrada",
      },
      {
        Header: "Hora",
        accessor: "horarioHasta",
      },
      {
        Header: "Firma",
        accessor: "firmaSalida",
      },
    ];
    return template;
  }

  if (
    tipoTemplate === "TEMPLATE_GENERAL" &&
    templateSubgrupo === "TEMPLATE_GENERAL_SUB1"
  ) {
    return [
      {
        Header: "Numero Afiliado",
        accessor: "nro_afiliado",
      },
      {
        Header: "Nombre",
        accessor: "nombre",
      },
      {
        Header: "Apellido",
        accessor: "apellido",
      },
      {
        Header: "Hora",
        accessor: "horarioDesde",
      },
      {
        Header: "Firma",
        accessor: "firmaEntrada",
      },
      {
        Header: "Hora",
        accessor: "horarioHasta",
      },
      {
        Header: "Firma",
        accessor: "firmaSalida",
      },
    ];
  }

  if (
    tipoTemplate === "TEMPLATE_GENERAL" &&
    templateSubgrupo === "TEMPLATE_GENERAL_SUB2"
  ) {
    return [
      {
        Header: "Numero Afiliado",
        accessor: "nro_afiliado",
      },
      {
        Header: "Nombre",
        accessor: "nombre",
      },
      {
        Header: "Apellido",
        accessor: "apellido",
      },
      {
        Header: "Hora",
        accessor: "horarioDesde",
      },
      {
        Header: "Firma",
        accessor: "firmaEntrada",
      },
      {
        Header: "Hora",
        accessor: "horarioHasta",
      },
      {
        Header: "Firma",
        accessor: "firmaSalida",
      },
    ];
  }

  if (
    tipoTemplate === "TEMPLATE_GENERAL" &&
    templateSubgrupo === "TEMPLATE_GENERAL_SUB3"
  ) {
    return [
      {
        Header: "Numero Afiliado",
        accessor: "nro_afiliado",
      },
      {
        Header: "Nombre",
        accessor: "nombre",
      },
      {
        Header: "Apellido",
        accessor: "apellido",
      },
      {
        Header: "Hora",
        accessor: "horarioDesde",
      },
      {
        Header: "Firma",
        accessor: "firmaEntrada",
      },
      {
        Header: "Hora",
        accessor: "horarioHasta",
      },
      {
        Header: "Firma",
        accessor: "firmaSalida",
      },
    ];
  }

  if (tipoTemplate === "TEMPLATE_CONTRATOS_TEMPORARIOS") {
    return [
      {
        Header: "Numero Afiliado",
        accessor: "nro_afiliado",
      },
      {
        Header: "Nombre",
        accessor: "nombre",
      },
      {
        Header: "Apellido",
        accessor: "apellido",
      },
      {
        Header: "Hora",
        accessor: "horarioDesde",
      },
      {
        Header: "Firma",
        accessor: "firmaEntrada",
      },
      {
        Header: "Hora",
        accessor: "horarioHasta",
      },
      {
        Header: "Firma",
        accessor: "firmaSalida",
      },
    ];
  }

  if (tipoTemplate === "TEMPLATE_ORDENANZAS") {
    return [
      {
        Header: "Numero Afiliado",
        accessor: "nro_afiliado",
      },
      {
        Header: "Nombre",
        accessor: "nombre",
      },
      {
        Header: "Apellido",
        accessor: "apellido",
      },
      {
        Header: "Hora",
        accessor: "horarioDesde",
      },
      {
        Header: "Firma",
        accessor: "firmaEntrada",
      },
      {
        Header: "Hora",
        accessor: "horarioHasta",
      },
      {
        Header: "Firma",
        accessor: "firmaSalida",
      },
    ];
  }

  if (tipoTemplate === undefined || tipoTemplate === null) {
    return [
      {
        mensaje: "No hay datos para mostrar",
      },
    ];
  }
};

const getColumnasInformeDiario = (tipo_template, templateSubgrupo = "") => {
  const columnas = obtenerColumnasInformeDiario(
    tipo_template,
    templateSubgrupo
  );
  return columnas;
};

export {
  getColumnasListadoEmpleados,
  getColumnasInformeDiario,
  getFilasInformeDiario,
};
