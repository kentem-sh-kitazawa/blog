import { useEffect, useState } from "react";
import "../style/CreatePost.css";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

export type PostTextType = {
  title: string;
  mainText: string;
};
const CreatePost = ({ isAuth }: any) => {
  const navigate = useNavigate();
  //titleを保持するstate
  const [title, setTitle] = useState<string>("");
  //mainTextを保持するstate
  const [mainText, setMainText] = useState<string>("");

  const createPost = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      mainText: mainText,
      author: {
        username: auth.currentUser?.displayName,
        id: auth.currentUser?.uid,
      },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <section>
      <div className="create-post">
        <h2 className="postElement">記事を投稿する</h2>
        <label className="postElement">タイトル</label>
        <input
          className="postElement"
          type="text"
          value={title}
          onChange={(titleText) => {
            setTitle(titleText.target.value);
          }}
        ></input>
        <label className="postElement">投稿</label>
        <textarea
          className="postElement"
          value={mainText}
          onChange={(maintext) => {
            setMainText(maintext.target.value);
          }}
        ></textarea>
        <button
          className="createPostButton"
          onClick={
            createPost
            // () => {
            //ローカルストレージに保存する版
            // const posts: PostTextType = { title: title, mainText: mainText };
            // const prevPosts = localStorage.getItem("posts");
            // const parsePosts = prevPosts ? JSON.parse(prevPosts) : [];
            // const updatePosts = [...parsePosts, posts];
            // localStorage.setItem("posts", JSON.stringify(updatePosts));
            // setTitle("");
            // setMainText("");
            // }
          }
        >
          投稿する
        </button>
      </div>
    </section>
  );
};

export default CreatePost;
