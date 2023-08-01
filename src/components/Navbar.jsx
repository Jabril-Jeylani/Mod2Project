import { useNavigate } from "react-router-dom";

export default function Navbar() {
	const navigate = useNavigate();

	return (
		<div className="navbar-buttons">
			<h2
				id="h2id"
				onClick={() => navigate("/")}
			>
				Home
			</h2>
			<h2
				id="h2id"
				onClick={() => navigate("/stock/intraday/:symbol")}
			>
				Intraday
			</h2>
			<h2
				id="h2id"
				onClick={() => navigate("/stock/daily/:symbol")}
			>
				Daily
			</h2>
			<h2
				id="h2id"
				onClick={() => navigate("/stock/weekly/:symbol")}
			>
				Weekly
			</h2>
			<h2
				id="h2id"
				onClick={() => navigate("/stock/montly/:symbol")}
			>
				Monthly
			</h2>
		</div>
	);
}
