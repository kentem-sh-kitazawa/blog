import { useState } from "react";
import "../style/CreatePost.css";

export type PostTextType = {
  title: string;
  mainText: string;
};
const CreatePost = () => {
  //titleを保持するstate
  const [title, setTitle] = useState<string>("");
  //mainTextを保持するstate
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
        <button
          className="createPostButton"
          onClick={() => {
            const posts: PostTextType = { title: title, mainText: mainText };
            const prevPosts = localStorage.getItem("posts");
            const parsePosts = prevPosts ? JSON.parse(prevPosts) : [];
            const updatePosts = [...parsePosts, posts];
            localStorage.setItem("posts", JSON.stringify(updatePosts));
            setTitle("");
            setMainText("");
          }}
        >
          投稿する
        </button>
      </div>
    </section>
  );
};

export default CreatePost;
