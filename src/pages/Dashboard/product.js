import React from "react";

export default function Product() {
  let dataJSON = require("../../data/Prueba JSON.json");
  //convirtiendo a json
  dataJSON = JSON.stringify(dataJSON);
  //Convirtiendo a objeto javascript
  let dataname = JSON.parse(dataJSON);
  let ventas = 0;

  for (let x = 0; x in dataname; x++) {
    if(dataname[x].Concepto )
    if (dataname[x].Concepto === "Clavillos F30") {
      ventas++;
    }
  }
  return (
    <div class="sell">
      <p>Producto más vendido</p>
      <h2>Clavillos F30</h2>
      <p>{ventas} Ventas</p>
    </div>
  );
}
