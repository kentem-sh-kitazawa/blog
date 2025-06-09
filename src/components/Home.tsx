import { useEffect, useState } from "react";
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
    <div className="home-page">
      {posts.map((post: PostsType) => (
        <div className="post-contents" key={post.id}>
          <h1 className="post-heder">{post.title}</h1>
          <div className="post-text-container">{post.mainText}</div>
          <div className="post-fotter">
            <h3>{post.author.username}</h3>
            {/* ポストのidと現在ログインしているユーザーのid */}
            {post.author.id === auth.currentUser?.uid && (
              <button onClick={() => handleDelete(post.id)}>削除</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
