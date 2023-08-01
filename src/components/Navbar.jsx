import { useNavigate } from "react-router-dom";

export default function Navbar() {
	const navigate = useNavigate();

	return (
		<div className="navbar-selection">
			<ul className="navbar-ul">
				<li
					id="h2id"
					onClick={() => navigate("/")}
				>
					Home
				</li>
				<li
					id="h2id"
					onClick={() => navigate("/stock/intraday/:symbol")}
				>
					Intraday
				</li>
				<li
					id="h2id"
					onClick={() => navigate("/stock/daily/:symbol")}
				>
					Daily
				</li>
				<li
					id="h2id"
					onClick={() => navigate("/stock/weekly/:symbol")}
				>
					Weekly
				</li>
				<li
					id="h2id"
					onClick={() => navigate("/stock/montly/:symbol")}
				>
					Montly
				</li>
			</ul>
		</div>
	);
}
