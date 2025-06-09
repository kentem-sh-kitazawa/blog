import type { PostTextType } from "./CreatePost";
import { useEffect, useState } from "react";
import "../style/Home.css";
const Home = () => {
  const [posts, setPosts] = useState<PostTextType[]>([]);

  // useEffect(() => {
  //   const savePosts = localStorage.getItem("posts");
  //   const parsedPosts: PostTextType[] = savePosts ? JSON.parse(savePosts) : [];
  //   setPosts(parsedPosts);
  // }, []);

  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeder">
          <h1>タイトル</h1>
        </div>
        <div className="postTextContainer">
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </div>
        <div className="nameAndDeleteButton">
          <h3>@a</h3>
          <button>削除</button>
        </div>
      </div>
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
