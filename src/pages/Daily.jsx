import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../API";

export default function Daily() {
	const { symbol } = useParams();
	let key = import.meta.env.REACT_APP_API_KEY;
	return (
		<div>
			<Navbar />
			<API
				symbol={symbol}
				url={`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=compact&apikey=${key}`}
			/>
		</div>
	);
}
