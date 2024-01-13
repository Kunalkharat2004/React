/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const PostContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const Default_data = [
  {
    id: 1,
    title: "Ephemeral Elegance",
    Description:
      "Immerse yourself in the fleeting beauty of life with our new collection, where every moment is a masterpiece waiting to be celebrated. Embrace the ephemeral elegance that surrounds you and let it inspire your style. ",
    hashtags: [
      "#EphemeralElegance",
      " #FashionInspiration",
      " #TimelessBeauty",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reactions: 1594,
    userId: 12212334,
  },
  {
    id: 2,
    title: "Ephemeral Elegance",
    Description:
      "Immerse yourself in the fleeting beauty of life with our new collection, where every moment is a masterpiece waiting to be celebrated. Embrace the ephemeral elegance that surrounds you and let it inspire your style. ",
    hashtags: [
      "#EphemeralElegance",
      " #FashionInspiration",
      " #TimelessBeauty",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1682687982141-0143020ed57a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reactions: 2343,
    userId: 1253234,
  },
  {
    id: 3,
    title: "Ephemeral Elegance",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, cum. Voluptate architecto laborum cumque! Repudiandae.",
    hashtags: [
      "#EphemeralElegance",
      " #FashionInspiration",
      " #TimelessBeauty",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1700993443573-27b64e169c02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reactions: 7865,
    userId: 1245434,
  },
  {
    id: 4,
    title: "Celestial Serenity",
    Description:
      " Explore the ethereal beauty of our new collection, 'Celestial Serenity.' Each piece is a celestial symphony, blending tranquility and style. Elevate your look and let the cosmos inspire your fashion journey.",
    hashtags: ["#FashionGalaxy", " #CelestialVibes ", "  #NewArrivals"],
    imgUrl:
      "https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reactions: 3432,
    userId: 632789,
  },
];

const postReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
    
  } else if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id != action.payload.postId
    );
  }

  return newPostList;
};

const PostContextProvider = ({ children }) => {
  let [postList, dispatchPost] = useReducer(postReducer, Default_data);

  const addPost = (id,userId,title,Description,hashtags,imgUrl,reactions) => {
  const addPostDispatch = {
    type:"ADD_POST",
    payload:{
        id,
        userId,
        title,
        Description,
        hashtags,
        imgUrl,
        reactions
    }
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

  return (
    <PostContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
