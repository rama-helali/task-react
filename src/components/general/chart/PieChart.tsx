// import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
// import { FC, useContext } from "react";
// import { Pie } from "react-chartjs-2";

// ChartJS.register(ArcElement, Tooltip, Legend);
// interface IProps {
//   lables?: any[];
//   count?: any[];
//   colors?: any[];
// }
// const PieChart: FC<IProps> = (props) => {

//   const data = {
//     labels: props?.lables,
//     datasets: [
//       {
//         label: "count",
//         data: props?.count,
//         backgroundColor: props?.colors ?? [
//           "rgba(255, 99, 132, 0.5)",
//           "rgba(54, 162, 235, 0.5)",
//           "rgba(255, 206, 86, 0.5)",
//           "rgba(75, 192, 192, 0.5)",
//           "rgba(153, 102, 255, 0.5)",
//           "rgba(255, 159, 64, 0.5)",
//         ],

//         borderColor: props?.colors ?? [
//           "rgba(255, 99, 132, 0.5)",
//           "rgba(54, 162, 235, 0.5)",
//           "rgba(255, 206, 86, 0.5)",
//           "rgba(75, 192, 192, 0.5)",
//           "rgba(153, 102, 255, 0.5)",
//           "rgba(255, 159, 64, 0.5)",
//         ],
//         borderWidth: 1.3,
//         rotation: 50,
//         hoverOffset: 10,
//         hoverBorderWidth: 6,
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       animation: {
//         animateRotate: true,
//         animateScale: true,
//       },
//       legend: {
//         labels: {
//           color: "white",
//         },
//       },
//     },
//   };

//   return <Pie data={data} options={options} />;
// };

// export default PieChart
const PieChart =() => {
  return (<></>)
}
export default PieChart;