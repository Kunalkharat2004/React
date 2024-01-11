import "bootstrap/dist/css/bootstrap.min.css";

function App(){

  let foods = ["Green vegetables","Salad","Egg","Sproutes"];

  // let foods = [];

  return (
    <>
    <h1>Healthy Foods</h1>
    {/* {foods.length === 0? <h3>I am still hungry</h3>:null} */}

      {/* OR  */}

    {foods.length === 0 && <h3>I am still hungry</h3>}

    <ul className="list-group">
      {
      foods.map(food => 
      <li key={food} className='list-group-item'>{food}</li>)}
    </ul>
    </>
  )
}

export default App;