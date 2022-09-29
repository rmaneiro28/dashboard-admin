const data = {
  chart: {
    type: "area",
    backgroundColor: "#1c273c",
    fontSize: 11,
    height: 170,
    style: {
      fontSize: 11,
      color: "#FFF",
    },
  },
  title: {
    align: "left",
    text: "Ventas por Año",
    style: {
      fontSize: 11,
      color: "#FFF",
    },
  },
  legend: {
    enabled: false,
    floating: true,
    align: "right",
    verticalAlign: "top",
    backgroundColor: "rgba(255,255,255,0.5)",
    fontSize: 11,
    borderRadius: 4,
  },
  xAxis: {
    title: {
      style: {
        fontSize: 11,
        color: "#FFF",
      },
    },
    labels: {
      style: {
        fontSize: 11,
        color: "#FFF",
      },
    },
  },
  yAxis: {
    title: {
      enabled: false,
    },
    labels: {
      style: {
        fontSize: 11,
        color: "#FFF",
      },
    },
    style: {
      fontSize: 11,
      color: "#FFF",
    },
  },
  plotOptions: {
    fontSize: 11,
    series: {
      pointStart: 2015,
    },
    area: {
      fillOpacity: 0.5,
    },
  },
  series: [
    {
      name: "Ventas",
      data: [1000, 2000, 1700, 1400, 1300, 700, 1700, 2400],
    },
  ],
};
export default data;
