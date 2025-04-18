// import React, { FC } from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// interface IProps {
//   lables?: any[];
//   datasets?: any[];
// }

// const BarChart: FC<IProps> = (props) => {
//   const chartData: any = {
//     labels: props?.lables,
//     datasets: props?.datasets,
//   };

//   const chartOptions: any = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       scales: {
//         x: {
//           type: "category",
//           grid: {
//             display: true,
//           },
//         },
//         y: {
//           grid: {
//             display: true,
//           },
//           ticks: {
//             beginAtZero: true,
//           },
//         },
//       },
//     },
//   };

//   return <Bar data={chartData} options={chartOptions} />;
// };
const BarChart =() => {
  return (<></>)
}
export default BarChart;
