/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const PostContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});


const postReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "ADD_POST") {
    console.log(action.payload);
    newPostList = [action.payload, ...currPostList];
    
  } else if (action.type === "DELETE_POST") {
    console.log(action.payload.postId);
    newPostList = currPostList.filter(
      (post) => post.id != action.payload.postId
    );
  }
  else if(action.type === "INITIAL_POST"){
   newPostList = action.payload.posts;
  }

  return newPostList;
};

const PostContextProvider = ({ children }) => {
  let [postList, dispatchPost] = useReducer(postReducer, []);

  const addPost = (post) => {
  const addPostDispatch = {
    type:"ADD_POST",
    payload: post
  }
  dispatchPost(addPostDispatch);
  };

  const deletePost = (postId) => {
    const deletePostDispatch = {
      type: "DELETE_POST",
      payload: {
        postId,
      },
    };
    dispatchPost(deletePostDispatch);
  };

  const initialPosts = (posts)=>{

    const initialPostdispatch = {
      type:"INITIAL_POST",
      payload:{
        posts
      }
    }
    dispatchPost(initialPostdispatch)

  }

  return (
    <PostContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;