import React, { useContext, useState, useEffect } from "react";
import Highcharts from "highcharts/highcharts";
import HighchartsReact from "highcharts-react-official";
import { LocalContext } from "../Localcontext";

const PieChart = () => {
  const {
    authentication: [auth, setAuth],
    userData: [users, setUsers],
  } = useContext(LocalContext);
  const tempData = [
    {
      name: "Chrome",
      y: 61.41,
      sliced: true,
      selected: true,
    },
    {
      name: "Internet Explorer",
      y: 11.84,
    },
    {
      name: "Firefox",
      y: 10.85,
    },
    {
      name: "Edge",
      y: 4.67,
    },
    {
      name: "Safari",
      y: 4.18,
    },
    {
      name: "Sogou Explorer",
      y: 1.64,
    },
    {
      name: "Opera",
      y: 1.6,
    },
    {
      name: "QQ",
      y: 1.2,
    },
    {
      name: "Other",
      y: 2.61,
    },
  ];
  const [pieData, setPieData] = useState(tempData);
  const createData = () => {
    let list = [];
    const created = auth.createdAt;

    // console.log(created);
    created.forEach((d, i) => {
      list.push({
        name: d,
        y: auth.comments[i],
      });
    });
    setPieData(list);
  };
  useEffect(() => {
    try {
      createData();
    } catch (error) {
      console.log(error);
    }
  }, [auth]);

  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "Comment count on created Issue in Github",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.y}</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        name: "Comments",
        colorByPoint: true,
        data: pieData,
      },
    ],
  };
  return pieData !== tempData ? (
    <HighchartsReact highcharts={Highcharts} options={options} />
  ) : null;
};
export default PieChart;
