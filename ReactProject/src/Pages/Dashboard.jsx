
import BarChart from "../Components/BarChart.jsx";
import PieChart from "../Components/PieChart.jsx";
import LineChart from "../components/LineChart.jsx";
import DoughnutChart from "../components/DoughnutChart.jsx";
function Dashboard() {
  return <div>
    <BarChart></BarChart>
    <PieChart></PieChart>
    <LineChart></LineChart>
    <DoughnutChart></DoughnutChart>
  </div>;
}

export default Dashboard;
