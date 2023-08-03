import { useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import { Container } from "react-bootstrap";
import API from "../API";
import { UserContext } from "../App";
import { useContext } from "react";

export default function Daily() {
	const { symbol } = useParams();
	const { stockReport, link } = useContext(UserContext);

	const currentSymbol = link || symbol;

	let key = import.meta.env.REACT_APP_API_KEY;

	return (
		<div className="p-3 mb-2 bg-dark bg-gradient text-white">
			<Container
				fluid="md"
				bg="dark"
				data-bs-theme="dark"
			>
				<NavigationBar />
				<Container fluid>
					<API
						symbol={currentSymbol}
						url={`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${currentSymbol}&outputsize=compact&apikey=${key}`}
						stockReportData={stockReport?.["Time Series (Daily)"]}
					/>
				</Container>
			</Container>
		</div>
	);
}
