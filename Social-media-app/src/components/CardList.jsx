/* eslint-disable react/jsx-key */
import Card from "./Card";
import styles from "../styles/CardList.module.css"; 
import Message from "./Message";
import { useLoaderData } from "react-router-dom";

function CardList() {

const postList= useLoaderData();
  
  return (<>
     
    { postList.length === 0?<Message/>:
    <div className={styles.cardList}>
    { postList.map((post)=><Card key={post.id} PostDetails = {post}/>)}
  </div>
  }
  </>
  );
}

export const postLoader = () =>{
  const URL = 'https://dummyjson.com/posts?limit=50';
  return fetch(URL)
  .then(res => res.json())
  .then(PostData=>{
    return PostData.posts;
  });
}

export default CardList;