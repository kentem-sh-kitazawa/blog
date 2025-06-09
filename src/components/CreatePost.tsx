import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";

import { auth, db } from "../firebase";

import "../style/CreatePost.css";

type Props = {
  isAuth: boolean;
};

const CreatePost = ({ isAuth }: Props) => {
  const navigate = useNavigate();
  //titleを保持するstate
  const [title, setTitle] = useState<string>("");
  //mainTextを保持するstate
  const [mainText, setMainText] = useState<string>("");

  //firebaseにデータを追加する
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

  //ログインしていないときにはログイン画面に移動する処理
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="create-post">
      <h2>記事を投稿する</h2>
      <label>タイトル</label>
      <input
        type="text"
        value={title}
        onChange={(titleText) => setTitle(titleText.target.value)}
      />
      <label>投稿</label>
      <textarea
        value={mainText}
        rows={5}
        onChange={(maintext) => setMainText(maintext.target.value)}
      />
      <button className="create-Post-Button" onClick={createPost}>
        投稿する
      </button>
    </div>
  );
};

export default CreatePost;
