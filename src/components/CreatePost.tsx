import { useState } from "react";
import "../style/CreatePost.css";
const CreatePost = () => {
  const [title, setTitle] = useState<string>("");
  const [mainText, setMainText] = useState<string>("");
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
        <button className="createPostButton">投稿する</button>
      </div>
    </section>
  );
};

export default CreatePost;
