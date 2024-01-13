/* eslint-disable react/jsx-key */
import Card from "./Card";
import styles from "../styles/CardList.module.css"; 
import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";

function CardList() {
  
  const {postList} = useContext(PostContext);
  return (
    <div className={styles.cardList}>
      {postList.map((post)=><Card key={post.id} PostDetails = {post}/>)}
    </div>
  );
}

export default CardList;