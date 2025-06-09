import { useEffect, useState } from "react";
import "../style/Home.css";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";

import "../style/Home.css";

  type PostsType = {
    author: { username: string; id: string };
    id: string;
    mainText: string;
    title: string;
  };

const Home = () => {
  const [posts, setPosts] = useState<any[]>([]);

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

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };

  return (
    <div className="homePage">
      {posts.map((post: PostsType) => (
        <div className="postContents" key={post.id}>
          <div className="postHeder">
            <h1>{post.title}</h1>
          </div>
          <div className="postTextContainer">{post.mainText}</div>
          <div className="nameAndDeleteButton">
            <h3>{post.author.username}</h3>
            {/* ポストのidと現在ログインしているユーザーのid */}
            {post.author.id === auth.currentUser?.uid && (
              <button
                onClick={() => {
                  handleDelete(post.id);
                }}
              >
                削除
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
