import { useState } from "react";
const CreatePost = () => {
  const [title, setTitle] = useState<string>("");
  const [mainText, setMainText] = useState<string>("");
  return (
    <div>
      <h2>記事を投稿する</h2>
      <label>
        タイトル
        <input
          type="text"
          value={title}
          onChange={(titleText) => {
            setTitle(titleText.target.value);
          }}
        ></input>
      </label>
      <label>
        投稿
        <textarea
          value={mainText}
          onChange={(maintext) => {
            setMainText(maintext.target.value);
          }}
        ></textarea>
      </label>
      <button>投稿する</button>
    </div>
  );
};

export default CreatePost;
