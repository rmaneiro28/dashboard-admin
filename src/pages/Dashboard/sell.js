import { ArrowUpIcon, ArrowDownIcon } from "@primer/octicons-react";
import React from "react";

export default function SellMonth() {
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  const mesActual = new Date().getMonth();
  let nameMonth = meses[mesActual];
  let dataJSON = require("../../data/Prueba JSON.json");
  //convirtiendo a json
  dataJSON = JSON.stringify(dataJSON);
  //Convirtiendo a objeto javascript
  let dataname = JSON.parse(dataJSON);
  let salesMonthSearch = 0;
  let salesLastMonth = 0;
  let MonthSearch = nameMonth;
  let LastMonth = meses[mesActual - 1];
  function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  capitalizarPrimeraLetra(MonthSearch);

  //Recorriendo el objeto
  for (let x = 0; x in dataname; x++) {
    if (dataname[x].Mes === MonthSearch) {
      salesMonthSearch += dataname[x].TOTAL;
    }
    if (dataname[x].Mes === LastMonth) {
      salesLastMonth += dataname[x].TOTAL;
    }
  }

  if (salesMonthSearch > salesLastMonth) {
    const porcentage = salesMonthSearch / salesLastMonth;
    return (
      <div class="sell">
        <p>Ventas de {capitalizarPrimeraLetra(MonthSearch)}</p>
        <h2>
          $ {salesMonthSearch}
        </h2>
        <p class="kpi">
          <ArrowUpIcon fill="#50B432" size={24} />{porcentage.toFixed(2)}% más que en {LastMonth}
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p>Ventas de {capitalizarPrimeraLetra(MonthSearch)}</p>
        <h1>$ {salesMonthSearch}</h1>
        
        <p class="kpi">
          <ArrowDownIcon fill="red" size={24} />
          <span>Menos ventas que en {LastMonth} </span>
        </p>
      </div>
    );
  }
}
