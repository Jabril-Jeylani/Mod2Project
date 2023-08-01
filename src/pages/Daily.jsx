import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../API";
// import { Symbol } from './Symbol'

export default function Stock() {
	const { symbol } = useParams();

	return (
		<div>
			<Navbar />
			<API symbol={symbol} />
		</div>
	);
}
