import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import data from "../../utils/dataPieChart";

export default class CustomersChart extends React.Component {
  render() {
    return (
      <div class="customers">
        <HighchartsReact highcharts={Highcharts} options={data} />
      </div>
    );
  }
}
