import { useEffect, useState, useRef } from 'react'
import { Symbol } from './Symbol'
import BarChart from './components/BarChart'
import LineChart from './components/LineChart';

export default function API() {
    const [stockReport, setStockReport] = useState(null);
    const [userData, setUserData] = useState({
      labels: [],
      datasets: [{
        label: 'Stock Chart',
        data: []
      }]
    });
    const [userVolume, setUserVolume] = useState({
        labels: [],
        datasets: [{
          label: 'Stock Chart',
          data: []
        }]
      });

    useEffect(() => {
        if (window.localStorage !== undefined) {
            const data = window.localStorage.getItem('stockReport');
            console.log('Data from Local Storage:', JSON.parse(data));
            data !== null ? setStockReport(JSON.parse(data)) : null;
        }
    }, []);
    
    useEffect(() => {
        if (stockReport !== null) {
            const labels = Object.entries(stockReport['Time Series (Daily)']).map((data) => data[0]);
            const open = Object.entries(stockReport['Time Series (Daily)']).map((data) => data[1]['1. open']);
                
            setUserData({
                labels: labels,
                datasets: [{
                label: 'Open',
                borderColor: 'green',
                tension: 0,
                pointHoverBackgroundColor: 'red',
                data: open
                }]
            });
        }
      }, [stockReport]);

      useEffect(() => {
        if (stockReport !== null) {
            const labels = Object.entries(stockReport['Time Series (Daily)']).map((data) => data[0]);
            const volume = Object.entries(stockReport['Time Series (Daily)']).map((data) => data[1]['5. volume']);
                
            setUserVolume({
                labels: labels,
                datasets: [{
                label: 'Volume',  
                backgroundColor: '#F2AF29',             
                data: volume
                }]
            });
        }
      }, [stockReport]);
    
    async function fetchStocks() {
        let key = import.meta.env.REACT_APP_API_KEY
        let url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${Symbol.Nvidia}&outputsize=compact&apikey=${key}`
        try {
        const response = await fetch(url)
        const stockReport = await response.json()

        console.log('API Response:', stockReport)
        localStorage.setItem('stockReport', JSON.stringify(stockReport))
        setStockReport(stockReport)
        console.log(stockReport)
        } catch(e) {
            console.log(e)
        }
    }

    function deleteStocks() {
        window.localStorage.removeItem('stockReport')
        setStockReport(null)
    }

    const companyInfo = () => { 
        if (stockReport) {
            return <div>{Object.entries(stockReport[ 'Meta Data']).map(([key, subject], i) => (
                <div key={i}> {key} {subject}</div>
            ))}</div>
            }
        else 
            console.log('Object is falsy')
            return null
    }

    const stockInfo = () => {
        if (stockReport) {
            return (
            <div>
                {Object.entries(stockReport['Time Series (Daily)']).map(([date, data], i) => (
                <div key={i}>
                    {date}
                    <div>Open: {data['1. open']}</div>
                    <div>Close: {data['4. close']}</div>
                </div>
                ))}
            </div>
            );
        } else {
            console.log('stockInfo is falsy');
            return null;
        }
    };

    return  (
    <div className='dataCharts'>
        {/* buttons to call API and Delete data */}
        <button onClick={fetchStocks}>Call API</button>
        <button onClick={deleteStocks}>Delete data</button>

        {userData.labels.length > 0 && ( // Only render if userData has data
        <div className='linechart' style={{width: 1200,
        borderColor: 'green'}}>
          <LineChart chartData={userData} />
        </div>
        )}
        {userData.labels.length > 0 && ( // Only render if userData has data
        <div className='barchart' style={{width: 1200}}>
          <BarChart chartData={userVolume} />
        </div>
        )}
        {/* {companyInfo()}       
        {stockInfo()} */}
               
    </div>
    )
}  