import React, { useContext } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { LocalContext } from "../Localcontext";
const ColumnChart = () => {
  const {
    authentication: [auth, setAuth],
    userData: [users, setUsers],
  } = useContext(LocalContext);
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Comment count on created Issue in Github",
    },
    subtitle: {
      text: "Source: Github",
    },
    xAxis: {
      categories: auth.createdAt,
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Comments",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} </b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "no of comments",
        data: auth.comments,
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ColumnChart;
