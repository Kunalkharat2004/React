import { useContext, useRef,useState } from "react";
import { PostContext } from "../contexts/PostContext";



function CreatePost() {

  const {addPost} = useContext(PostContext);
let userIDElement = useRef("");
let titleElement = useRef("");
let descriptionElement = useRef("");
let hashtagElement = useRef("");
let imageElement = useRef("");
let reactionElement = useRef("");

const [submitted, setSubmitted] = useState(false);

  const handleOnSubmit = (e)=>{

    e.preventDefault();
    const id = Date.now();
    const userId = userIDElement.current.value;
    const title = titleElement.current.value;
    const Description = descriptionElement.current.value;
    const hashtags = hashtagElement.current.value.split(" ");
    const imgUrl = imageElement.current.value;
    const reactions = reactionElement.current.value;

    
    addPost(id,userId,title,Description,hashtags,imgUrl,reactions)
    userIDElement.current.value = "";
    titleElement.current.value = "";
    descriptionElement.current.value="";
    hashtagElement.current.value="";
    imageElement.current.value="";
    reactionElement.current.value="";
    setSubmitted(true);
  }

  return (
   <form className="form" onSubmit={(e)=>handleOnSubmit(e)}>

{submitted && <div className="alert alert-success alert-dismissible fade show" role="alert">
  New post created.
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
}


   <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">UserID</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your UserId" ref={userIDElement} />
</div>
   <div className="mb-3">
  <label htmlFor="exampleFormControlInput2" className="form-label">Title</label>
  <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Enter a Title" ref={titleElement}/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea3" className="form-label">Description</label>
  <textarea className="form-control" id="exampleFormControlTextarea3" rows="3" placeholder="Add a description" ref={descriptionElement}></textarea>
</div>

<div className="mb-3">
  <label htmlFor="exampleFormControlInput4" className="form-label">Hashtags</label>
  <input type="text" className="form-control" id="exampleFormControlInput4" placeholder="Provide hashtags seperated by spaces" ref={hashtagElement}/>
</div>

<div className="mb-3">
  <label htmlFor="exampleFormControlInput5" className="form-label">Image</label>
  <input type="text" className="form-control" id="exampleFormControlInput5" placeholder="Enter image URL" required ref={imageElement}/>
</div>

<div className="mb-3">
  <label htmlFor="exampleFormControlInput6" className="form-label">Reactions</label>
  <input type="number" className="form-control" id="exampleFormControlInput6" placeholder="Enter number of reactions" ref={reactionElement}/>
</div>

<button className="btn btn-primary">Post</button>
   </form>
  )
}

export default CreatePost;