// eslint-disable-next-line react/prop-types
let TodoItem = ({task,date})=>{
    return <div className="container">

<div className="row row to-do-row">
        <div className="col-6">
         {task}
        </div>
        <div className="col-4">
        {date}
        </div>
        <div className="col-2">
        <button type="button" className="btn btn-danger btn-to-do">Delete</button>
        </div>
      </div>

    </div>
}

export default TodoItem;