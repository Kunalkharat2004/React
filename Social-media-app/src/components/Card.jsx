/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
import styles from "../styles/Card.module.css";
import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";

function Card({PostDetails}) {

  const {deletePost} = useContext(PostContext);

  return (
   <div className={styles.cardContainer}>
  <div className={`card-body ${styles.cardContent}`}>

    <h5 className="card-title">{PostDetails.title}
    <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ${styles.deletePost}`}
    onClick={()=>deletePost(PostDetails.id)}>
    <MdDelete />
  </span>
    </h5>
    <p className="card-text">{PostDetails.body}</p>
    {PostDetails.tags.map((hastag)=><span key={hastag} className={`badge text-bg-primary ${styles.hashtag}`}>{hastag}</span>)}

    <div className={` ${styles.reaction} alert alert-light`} role="alert">
  Liked by <b>{PostDetails.reactions}</b> people`s
</div>
    
  </div>
</div>
  )
}

export default Card