function Random(){

    let randNo = Math.floor(Math.random()*10)+1;

    return (
        <>
        <h1 style={{backgroundColor:"crimson"}}>Random number generated : {randNo}</h1>
        </>
    )
}
export default Random;