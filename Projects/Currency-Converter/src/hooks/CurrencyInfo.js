import { useEffect, useState } from "react";

const CurrencyInfo = (currency) =>{
    const [data, setData] = useState({});
    useEffect(()=>{
        const URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

        fetch(URL)
        .then((res)=> res.json())
        .then(res => setData(res[currency]));
    },[currency])

    return data;
}

export default CurrencyInfo;