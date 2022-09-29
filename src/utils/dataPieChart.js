
const data = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie",
    width: 570,
    height: 400,
    backgroundColor: "transparent",
    marginRight: 240,
  },
  title: {
    align: "left",
    style: { fontSize: 18, color: "#FFF" },
    text: "Clientes con más ventas",
  },
  tooltip: {
    pointFormat:
      "<b>Cantidad {point.y} </b><br/><b>Porcentaje: {point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  legend: {
    enabled: true,
    floating: true,
    align: "right",
    verticalAlign: "middle",
    width: 200,
    height: 200,
    backgroundColor: "rgba(255,255,255,0.5)",
    fontSize: 11,
    borderRadius: 4,
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: false,
      },
      showInLegend: true,
    },
  },
  series: [
    {
      name: "Ventas",
      colorByPoint: true,
      data: [
        {
          name: "Danny Ferreira",
          y: 13,
          sliced: true,
          selected: true,
        },
        {
          name: "Dudbranco Contreras",
          y: 10,
        },
        {
          name: "Jean Carlos Pino",
          y: 7,
        },
        {
          name: "Leomar Mora",
          y: 3,
        },
        {
          name: "Pedro González",
          y: 2,
        },
      ],
    },
  ],
};

export default data;
