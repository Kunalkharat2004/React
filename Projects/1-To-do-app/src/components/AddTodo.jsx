let AddTodo= ()=>{
    return <div className="container">

<div className="row to-do-row">
        <div className="col-6">
          <input type="text" name="todo" placeholder="Enter todo"/>
        </div>
        <div className="col-4">
        <input type="date" name="date"/>
        </div>
        <div className="col-2 add-to-do-btn">
        <button type="button" className="btn btn-success btn-to-do">Add</button>
        </div>
      </div>
      
    </div>
}

export default AddTodo;