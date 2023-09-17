import { useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import API from "../API";
import { Container } from "react-bootstrap";
import { UserContext } from "../App";
import { useContext } from "react";

export default function Weekly() {
	const { symbol } = useParams();
	const { stockReport, link } = useContext(UserContext);

	const currentSymbol = link || symbol;

	let key = import.meta.env.REACT_APP_API_KEY;

	return (
		<div className="p-3 mb-2 bg-dark bg-gradient text-white">
			
				<NavigationBar />
				
					<API
						symbol={currentSymbol}
						url={`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${currentSymbol}&outputsize=compact&apikey=${key}`}
						stockReportData={stockReport?.["Weekly Time Series"]}
					/>
				
			
		</div>
	);
}
