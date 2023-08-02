import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../API";
import { UserContext } from "../App";
import { useContext } from "react";

export default function Intraday() {
	const { symbol } = useParams();
	const { stockReport } = useContext(UserContext);

	let key = import.meta.env.REACT_APP_API_KEY;

	console.log(symbol);
	return (
		<div>
			<Navbar />
			<API
				symbol={symbol}
				url={`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&outputsize=compact&apikey=${key}`}
				stockReportData={stockReport?.["Time Series (5min)"]}
			/>
		</div>
	);
}
