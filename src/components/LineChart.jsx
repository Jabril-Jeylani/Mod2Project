import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = ({ chartData }) => {
	if (!chartData || !chartData.labels || chartData.labels.length === 0) {
		return <div>No data available for LineChart</div>;
	}

	return (
		<div > 
			<Line width={300}
			height={300}
			options={{maintainAspectRatio: false}}
			data={chartData} />
		</div>
	);
};

export default LineChart;

