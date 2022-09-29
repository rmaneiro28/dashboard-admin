import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import data from "../../utils/dataMap";


export default class ConversionRate extends React.Component {
  render() {
    return (
      <div class="conversion">
        <HighchartsReact highcharts={Highcharts} options={data} />
      </div>
    );
  }
}

