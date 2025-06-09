import { useNavigate } from "react-router-dom";
import type { Dispatch } from "react";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase.tsx";

type Props = {
  setIsAuth: Dispatch<React.SetStateAction<boolean>>;
};

const Login = ({ setIsAuth: setIsAuth }: Props) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    //Googleでログイン
    signInWithPopup(auth, provider).then(() => {
      localStorage.setItem("isAuth", "true"); //ローカルストレージには文字列として保存されるため
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  );
};

export default Login;
