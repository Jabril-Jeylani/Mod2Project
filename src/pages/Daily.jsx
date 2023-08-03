import { useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import API from "../API";
import { UserContext } from "../App";
import { useContext } from "react";

export default function Daily() {
	const { symbol } = useParams();
	const { stockReport, link } = useContext(UserContext);

	const currentSymbol = link || symbol;

	let key = import.meta.env.REACT_APP_API_KEY;

	return (
		<div>
			<NavigationBar />
			<API
				symbol={currentSymbol}
				url={`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${currentSymbol}&outputsize=compact&apikey=${key}`}
				stockReportData={stockReport?.["Time Series (Daily)"]}
			/>
		</div>
	);
}
