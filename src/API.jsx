import { useEffect, useState, useRef } from 'react'
import { Symbol } from './Symbol'

export default function API() {
    const [stockReport, setStockReport] = useState(null)

    useEffect(() => {
        if (window.localStorage !== undefined) {
            const data = window.localStorage.getItem('stockReport')
            console.log('Data from Local Storage:', JSON.parse(data))
            data !== null ? setStockReport(JSON.parse(data)) : null
        }
    }, [])
    
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
        if (stockReport)
        return (
            <div>
              {Object.entries(stockReport['Time Series (Daily)']).map(
                ([date, data], i) => (
                  <div key={i}>
                    {date}
                    {Object.entries(data).map(([key, value], index) => (
                      <div key={index}>
                        {key}: {value}
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          );
        else    
            console.log('stockInfo is falsy')
            return null
    }

    return  (
    <div>
        {/* buttons to call API and Delete data */}
        <button onClick={fetchStocks}>Call API</button>
        <button onClick={deleteStocks}>Delete data</button>
              
        {companyInfo()}       
        {stockInfo()}
               
    </div>
    )
}  