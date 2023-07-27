import { useEffect, useState } from 'react'

export default function API() {
    const [stockReport, setStockReport] = useState({})

    useEffect(() => {
        fetchStocks()
    }, [])
    
    async function fetchStocks() {
        let key = 'DNS1IE42GMAAC6CA'
        let url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${key}`

        const response = await fetch(url)
        const stockReport = await response.json()
        console.log(stockReport)
        setStockReport(stockReport)
    }





    return  (
    <div>
        {/* <h1>{stockReport[ 'Meta Data' ][ '1. Information' ]}</h1> */}
        <h3>{Object.entries(stockReport).map(([key, subject], i) => (
            <ol>
                <li key={i}>{Object.entries(subject).map(([key, subject], i) =>(
                    <li key={i}>{Object.entries(subject).map(([key, subject]) => (
                        <li key={i}>key:{key} subject:{subject}</li>
                    ))}</li>
                ))}</li>
            </ol>
        ))}</h3>
    </div>
    )
}