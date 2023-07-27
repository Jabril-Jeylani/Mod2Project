import { useEffect, useState } from 'react'

export default function API() {
    const [stockReport, setStockReport] = useState({})

    useEffect(() => {
        if (window.localStorage !== undefined) {
            const data = window.localStorage.getItem('user')
            data !== null ? setStockReport(JSON.parse(data)) : null
        }
        // fetchStocks()
    }, [])
    
    async function fetchStocks() {
        let key = import.meta.env.REACT_APP_API_KEY
        let url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${key}`
        try {
        const response = await fetch(url)
        const stockReport = await response.json()
        localStorage.setItem('user', JSON.stringify(stockReport))
        setStockReport(stockReport)
        console.log(stockReport)
        } catch(e) {
            console.log(e)
        }
    }

    function deleteStocks() {
        window.localStorage.removeItem('stockReport')
        setStockReport({})
    }




    return  (
    <div>
        {/* <h1>{stockReport[ 'Meta Data' ][ '1. Information' ]}</h1> */}
        <button onClick={fetchStocks}>Call API</button>
        <button onClick={deleteStocks}>Delete data</button>
        {/* {stockReport && <pre>{JSON.stringify(stockReport, null, 4)}</pre>} */}
        <div>{Object.entries(stockReport).map(([key, subject], i) => (
            <div key={i}>{Object.entries(subject).map(([key, subject], i) =>(
                <span key={i}>{Object.entries(subject) }</span>
            ))}</div>
        ))}</div>
    </div>
    )
}