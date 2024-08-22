import { useEffect, useState } from "react";

function CurrTime(){

    const [CurrTime, setCurrTime] = useState(new Date());
    
      useEffect(()=>{
       const id = setInterval(()=>{
            setCurrTime(new Date())
        },1000)

        return () => {
            console.log("Interval cleared");
            clearInterval(id);}
      },[])

    return (
        <p className="para-currTime">This is the current time: {CurrTime.toLocaleDateString()} - {CurrTime.toLocaleTimeString()}</p>
    )
}

export default CurrTime;