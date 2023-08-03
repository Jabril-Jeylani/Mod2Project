import API from "../API";
import { UserContext } from "../App";
import { useContext } from "react";
import NavigationBar from "../components/NavigationBar";

export default function Homepage() {
	const { stockReport } = useContext(UserContext);

	let key = import.meta.env.REACT_APP_API_KEY;
	return (
		<div>
			<NavigationBar />
			<API
				url={`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=DOW&outputsize=compact&apikey=${key}`}
				stockReportData={stockReport?.["Time Series (Daily)"]}
			/>
		</div>
	);
}
