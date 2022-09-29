import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import data from "../../utils/dataColumnChart";

export default class SalesCategories extends React.Component {
  render() {
    return (
      <div class="categories">
        <HighchartsReact highcharts={Highcharts} options={data} />
      </div>
    );
  }
}
