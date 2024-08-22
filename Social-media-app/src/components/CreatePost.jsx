import { Form, redirect } from "react-router-dom";

function CreatePost() {


// const [submitted, setSubmitted] = useState(false);

  return (
   <Form method="POST" className="form">

{/* {submitted && <div className="alert alert-success alert-dismissible fade show" role="alert">
  New post created.
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
} */}


   <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">UserID</label>
  <input type="text" className="form-control" name="userId" id="exampleFormControlInput1" placeholder="Enter your UserId"/>
</div>
   <div className="mb-3">
  <label htmlFor="exampleFormControlInput2" className="form-label">Title</label>
  <input type="text" className="form-control" name="title" id="exampleFormControlInput2" placeholder="Enter a Title" />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea3" className="form-label">Description</label>
  <textarea className="form-control" name="body" id="exampleFormControlTextarea3" rows="3" placeholder="Add a description" ></textarea>
</div>

<div className="mb-3">
  <label htmlFor="exampleFormControlInput4" className="form-label">Hashtags</label>
  <input type="text" className="form-control" name="tags" id="exampleFormControlInput4" placeholder="Provide hashtags seperated by spaces" />
</div>

<div className="mb-3">
  <label htmlFor="exampleFormControlInput6" className="form-label">Reactions</label>
  <input type="number" className="form-control" name="reactions" id="exampleFormControlInput6" placeholder="Enter number of reactions" />
</div>

<button className="btn btn-primary">Post</button>
   </Form>
  )
}

export  async function  createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  
  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(res =>{
      console.log(res);
    });

    return redirect('/')
}

export default CreatePost;