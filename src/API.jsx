import { useEffect, useState } from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import { UserContext } from "./App";
import { useContext } from "react";

export default function API({ url, stockReportData }) {
	const {
		stockReport,
		setStockReport,
		userData,
		setUserData,
		userVolume,
		setUserVolume,
	} = useContext(UserContext);

	// Fetch on Load

	useEffect(() => {
		fetchStocks();
	}, []);

	useEffect(() => {
		if (window.localStorage !== undefined) {
			const data = window.localStorage.getItem("stockReport");
			console.log("Data from Local Storage:", JSON.parse(data));
			data !== null ? setStockReport(JSON.parse(data)) : null;
		}
	}, []);
	// Line Chart for Open
	useEffect(() => {
		if (stockReport !== null && stockReportData) {
			const labels = Object.entries(stockReportData)
				.map((data) => data[0])
				.reverse();
			const open = Object.entries(stockReportData)
				.map((data) => data[1]["1. open"])
				.reverse();

			setUserData({
				labels: labels,
				datasets: [
					{
						label: "Open",
						borderColor: "green",
						tension: 0,
						pointHoverBackgroundColor: "red",
						data: open,
					},
				],
			});
		}
	}, [stockReport]);
	// Bar Chart for Volume
	// Put a function with the logic inside the useEffect
	// and pass it through the individual ones with props
	useEffect(() => {
		if (stockReport !== null && stockReportData) {
			const labels = Object.entries(stockReportData)
				.map((data) => data[0])
				.reverse();
			const volume = Object.entries(stockReportData)
				.map((data) => data[1]["5. volume"])
				.reverse();

			setUserVolume({
				labels: labels,
				datasets: [
					{
						label: "Volume",
						backgroundColor: "#F2AF29",
						data: volume,
					},
				],
			});
		}
	}, [stockReport]);

	async function fetchStocks() {
		let key = import.meta.env.REACT_APP_API_KEY;
		// let url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=compact&apikey=${key}`;
		try {
			const response = await fetch(url);
			const stockReport = await response.json();
			if ("Error Message" in stockReport) {
				console.log("API Error:", stockReport["Error Message"]);
				// Handle the error case here if needed
			} else {
				console.log("API Response:", stockReport);
				localStorage.setItem("stockReport", JSON.stringify(stockReport));
				setStockReport(stockReport);
			}
		} catch (e) {
			console.log("API Error:", e);
		}
	}

	function deleteStocks() {
		window.localStorage.removeItem("stockReport");
		setStockReport(null);
	}

	const companyInfo = () => {
		if (stockReport && stockReport["Meta Data"]) {
			return (
				<div>
					{Object.entries(stockReport["Meta Data"]).map(([key, subject], i) => (
						<div key={i}> {subject}</div>
					))}
				</div>
			);
		} else if (stockReport && "Error Message" in stockReport) {
			return <div>Error: {stockReport["Error Message"]}</div>;
		} else {
			console.log("Object is falsy or contains an error message");
			return null;
		}
	};
	return (
		<div>
			{/* buttons to call API and Delete data */}
			{/* <button onClick={fetchStocks}>Call API</button>
			<button onClick={deleteStocks}>Delete data</button> */}
			{/* Display Company Meta Data */}
			{companyInfo()}
			{/* Render Line and Bar Charts */}
			<div className="dataCharts">
				{userData.labels.length > 0 && ( // Only render if userData has data
					<div
						className="linechart"
						style={{ width: 1100, borderColor: "green" }}
					>
						<LineChart chartData={userData} />
					</div>
				)}
				{userData.labels.length > 0 && ( // Only render if userData has data
					<div
						className="barchart"
						style={{ width: 1100 }}
					>
						<BarChart chartData={userVolume} />
					</div>
				)}
			</div>
		</div>
	);
}
