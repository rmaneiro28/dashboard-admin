import "../Main/main.scss";
import { MailIcon, DownloadIcon, FileIcon } from "@primer/octicons-react";
import ConversionRate from "../Dashboard/conversion";
import SalesCategories from "../Dashboard/categories";
import SellMonth from "../Dashboard/sell";
import SellYear from "../Dashboard/sellYear";
import Customers from "../Dashboard/customers";
import CustomersChart from "../Dashboard/customersSell";
import Product from "../Dashboard/product";

import Highcharts from "highcharts";

export default function Main() {
  Highcharts.theme = {
    colors: [
      "#058DC780",
      "#50B43280",
      "#ED561B80",
      "#DDDF0080",
      "#24CBE580",
      "#64E57280",
      "#FF965580",
      "#FFF26380",
      "#6AF9C480",
    ],
    chart: {
      backgroundColor: {
        linearGradient: [0, 0, 500, 500],
        stops: [
          [0, "rgb(255, 255, 255)"],
          [1, "rgb(240, 240, 255)"],
        ],
      },
    },
    title: {
      style: {
        color: "#000",
        font: 'bold 16px "Trebuchet MS", Verdana, sans-serif',
      },
    },
    subtitle: {
      style: {
        color: "#666666",
        font: 'bold 12px "Trebuchet MS", Verdana, sans-serif',
      },
    },
    legend: {
      itemStyle: {
        font: "9pt Trebuchet MS, Verdana, sans-serif",
        color: "black",
      },
      itemHoverStyle: {
        color: "transparent",
      },
    },
  };
  // Apply the theme
  Highcharts.setOptions(Highcharts.theme);
  return (
    <div class="Main">
      <div class="headerMain">
        <div class="title">
          <span>Dashboard / </span>
          <span class="posActual">monitoreo de ventas</span>
          <h1>Bienvenido al Dashboard</h1>
        </div>
        <div class="report">
          <div class="card">
            <MailIcon size={18} />
            <p>email</p>
          </div>
          <div class="card">
            <DownloadIcon size={18} />
            <p>print</p>
          </div>
          <div class="card generate-report">
            <FileIcon size={18} />
            <p>generate report</p>
          </div>
        </div>
      </div>
      <div class="dashboard">
        <div class="graph">
          <Product />
        </div>
        <div class="graph">
          <Customers />
        </div>

        <div class="graph">
          <SellMonth />
        </div>
        <div class="graph">
          <SellYear />
        </div>
        <div class="graph">
          <CustomersChart />
        </div>
        <div class="graph">
          <SalesCategories />
        </div>
        <div class="graph">
          <ConversionRate />
        </div>
        <div class="graph">
          <ConversionRate />
        </div>
        <div class="graph">
          <ConversionRate />
        </div>
        <div class="graph">
          <ConversionRate />
        </div>
      </div>
    </div>
  );
}
