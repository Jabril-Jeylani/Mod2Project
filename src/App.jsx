import { Route, Routes } from "react-router-dom";
import React from "react";
import { useState, createContext } from "react";
import Homepage from "./pages/Homepage";
import Daily from "./pages/Daily";
import Intraday from "./pages/Intraday";
import Weekly from "./pages/Weekly";
import Monthly from "./pages/Monthly";
import "bootstrap/dist/css/bootstrap.min.css";

export const UserContext = createContext();

function App(props) {
	const [link, setLink] = useState("");
	const [stockReport, setStockReport] = useState(null);
	const [userData, setUserData] = useState({
		labels: [],
		datasets: [
			{
				maintainAspectRatio: false,
				label: "Stock Chart",
				data: [],
			},
		],
	});
	const [userVolume, setUserVolume] = useState({
		labels: [],
		datasets: [
			{
				label: "Stock Chart",
				maintainAspectRatio: false,
				data: [],
			},
		],
	});

	return (
		<>
			<div >
				
					<UserContext.Provider
						value={{
							stockReport,
							setStockReport,
							userData,
							setUserData,
							userVolume,
							setUserVolume,
							link,
							setLink,
						}}
					>
						{props.children}

						<Routes>
							<Route
								path="/"
								element={<Homepage />}
							/>
							<Route
								path="stock/intraday/:symbol"
								element={<Intraday />}
							/>
							<Route
								path="stock/daily/:symbol"
								element={<Daily />}
							/>
							<Route
								path="stock/weekly/:symbol"
								element={<Weekly />}
							/>
							<Route
								path="stock/montly/:symbol"
								element={<Monthly />}
							/>
						</Routes>
					</UserContext.Provider>
				
			</div>
		</>
	);
}

export default App;
