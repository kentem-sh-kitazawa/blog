// import type { PostTextType } from "./CreatePost";
import { useEffect, useState } from "react";
import "../style/Home.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
const Home = () => {
  // const [posts, setPosts] = useState<PostTextType[]>([]);
  const [posts, setPosts] = useState<any[]>([]);

  type PostsType = {
    author: { id: string; username: string };
    id: string;
    mainText: string;
    title: string;
  };

  // useEffect(() => {
  //   const savePosts = localStorage.getItem("posts");
  //   const parsedPosts: PostTextType[] = savePosts ? JSON.parse(savePosts) : [];
  //   setPosts(parsedPosts);
  // }, []);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      setPosts(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getPosts();
  }, []);

  return (
    <div className="homePage">
      {posts.map((post) => (
        <div className="postContents" key={post.id}>
          <div className="postHeder">
            <h1>{post.title}</h1>
          </div>
          <div className="postTextContainer">{post.mainText}</div>
          <div className="nameAndDeleteButton">
            <h3>{post.author.username}</h3>
            <button>削除</button>
          </div>
        </div>
      ))}
    </div>
    //ローカルストレージ版
    // <div className="posts">
    //   <ul>
    //     {posts.map((post, index) => (
    //       <li key={index}>
    //         <h2>{post.title}</h2>
    //         <p>{post.mainText}</p>
    //         <div className="footer">
    //           <h3>＠名前</h3>
    //           <button
    //             className="postDeleteButton"
    //             onClick={() => {
    //               setPosts((prev) => {
    //                 const updatePosts = [...prev];
    //                 updatePosts.splice(index, 1);
    //                 localStorage.setItem("posts", JSON.stringify(updatePosts));
    //                 return updatePosts;
    //               });
    //             }}
    //           >
    //             削除
    //           </button>
    //         </div>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default Home;
