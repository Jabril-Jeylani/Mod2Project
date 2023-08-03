import API from "../API";
import { UserContext } from "../App";
import { useContext } from "react";
import NavigationBar from "../components/NavigationBar";
import { Col, Container } from "react-bootstrap";

export default function Homepage() {
	const { stockReport } = useContext(UserContext);

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
						url={`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=DOW&outputsize=compact&apikey=${key}`}
						stockReportData={stockReport?.["Time Series (Daily)"]}
					/>
				</Container>
			</Container>
		</div>
	);
}
