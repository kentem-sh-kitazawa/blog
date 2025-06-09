import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase.tsx";
import { useNavigate } from "react-router-dom";

type Props = {
  setisAuth: any;
};

const Login = ({ setisAuth }: Props) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    //Googleでログイン
    signInWithPopup(auth, provider).then(() => {
      localStorage.setItem("isAuth", "true"); //ローカルストレージには文字列として保存されるため
      setisAuth(true);
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
