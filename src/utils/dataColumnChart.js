const data = {
  chart: {
    type: "column",
    backgroundColor: "#1c273c",
  },
  legend: {
    enabled: true,
    floating: true,
    zIndex: -1,
    align: "right",
    verticalAlign: "top",
    y: -10,
    width: 238,
    style: {
      color: "#FFF",
    },
    backgroundColor: "rgba(255,255,255,0.5)",
    fontSize: 8,
    borderRadius: 4,
  },
  title: {
    align: "left",
    text: "Ventas por Categoría",
    style: {
      fontSize: 18,
      borderBottom: "1px solid rgba(0,0,0,1)",
      color: "#FFF",
    },
  },
  xAxis: {
    labels: {
      style: {
        fontSize: 11,
        color: "#FFF",
      },
    },
    categories: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    crosshair: true,
  },
  yAxis: {
    labels: {
      style: {
        fontSize: 11,
        color: "#FFF",
      },
    },
    title: {
      enabled: false,
    },
  },
  tooltip: {
    backgroundColor: "rgba(0,0,0,0.9)",
    borderRadius: 4,
    color: "#FFF",
    align: "center",
    borderColor: "none",
    headerFormat:
      '<span style="font-size:14px;borderColor:none; color:#FFF">{point.key} </span> <br/> <table style:"border:none; ">',
    pointFormat:
      '<tr style="border:none; color:#FFF;"><td style="border:none;color:{series.color};">{series.name}: </td>' +
      '<td style="border:none;"><b>{point.y} </b></td></tr>',
    footerFormat: "</table>",
    shared: true,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: "Tapicería",
      data: [4, 20, 14, 14, 17, 24, 17, 20, 8, 19, 10, 17],
    },
    {
      name: "Muebles",
      data: [1, 1, null, 1, null, null, 1, 1, 3, 1, null, null],
    },
    {
      name: "Herramientas",
      data: [null, null, null, null, null, 2, 1, 4, 1, 1],
    },
    {
      name: "Bicicleta",
      data: [null, null, 1, 1, null, 2, 2, 1, 2, 2, null, null],
    },
  ],
};
export default data;
