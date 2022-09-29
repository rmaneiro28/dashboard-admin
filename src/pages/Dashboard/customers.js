import React from "react";

export default function Customers() {
  let dataJSON = require("../../data/Prueba JSON.json");
  //convirtiendo a json
  dataJSON = JSON.stringify(dataJSON);
  //Convirtiendo a objeto javascript
  let dataname = JSON.parse(dataJSON);
  let ventas = 0;

  for (let x = 0; x in dataname; x++) {
    if (dataname[x].Cliente === "Danny Ferreira") {
      ventas++;
    }
  }
  return (
    <div class="sell">
      <p>Cliente con más Ventas </p>
      <h2>Danny Ferreira</h2>
      <p>{ventas} Ventas</p>
    </div>
  );
}
