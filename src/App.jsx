import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Daily from "./pages/Daily";
import Intraday from "./pages/Intraday";
import Weekly from "./pages/Weekly";
import Monthly from "./pages/Monthly";

function App() {
	return (
		<>
			<div className="app">
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
			</div>
		</>
	);
}

export default App;
