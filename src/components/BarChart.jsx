import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = ({ chartData }) => {
	if (!chartData || !chartData.labels || chartData.labels.length === 0) {
		return <div>No data available for BarChart</div>;
	}

	return <Bar data={chartData} />;
};

export default BarChart;
