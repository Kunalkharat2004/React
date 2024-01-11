function CurrTime(){

    let time = new Date();

    return (
        <p className="para-currTime">This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
    )
}

export default CurrTime;