import { ArrowUpIcon, ArrowDownIcon } from "@primer/octicons-react";
import React from "react";

export default function SellYear() {
  let dataJSON = require("../../data/Prueba JSON.json");
  //convirtiendo a json
  dataJSON = JSON.stringify(dataJSON);
  //Convirtiendo a objeto javascript
  let dataname = JSON.parse(dataJSON);
  let salesYearSearch = 0;
  let salesLastYear = 0;
  let yearSearch = 2022;
  let lastYear = yearSearch - 1;
  //Recorriendo el objeto
  for (let x = 0; x in dataname; x++) {
    if (dataname[x].Año === yearSearch) {
      salesYearSearch += dataname[x].TOTAL;
    }
    if (dataname[x].Año === lastYear) {
      salesLastYear += dataname[x].TOTAL;
    }
  }
  console.log(salesYearSearch);
  console.log(salesLastYear);

  if (salesYearSearch > salesLastYear) {
    const porcentage = salesYearSearch / salesLastYear;
    console.log(porcentage);
    return (
      <div class="sell">
        <p>Ventas de {yearSearch} </p>
        <h2>$ {salesYearSearch.toFixed(2)}</h2>
        <p>
          <ArrowUpIcon fill="#50B432" size={24} /> {porcentage.toFixed(2)}% Más
          que en {lastYear}
        </p>
      </div>
    );
  } else {
    const porcentage = salesYearSearch / salesLastYear;

    console.log(porcentage);
    if (porcentage < 1) {
      return (
        <div class="sellYear">
          <p>Ventas de {yearSearch}</p>
          <h2>$ {salesYearSearch.toFixed(2)}</h2>
          <p class="kpi">
            <ArrowDownIcon fill="red" size={24} />
            <span>
              {porcentage.toFixed(2)}% menos que en {lastYear}
            </span>
          </p>
        </div>
      );
    }
  }
}
