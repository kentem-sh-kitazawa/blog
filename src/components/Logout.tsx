import { signOut } from "firebase/auth";
import { auth } from "../firebase.tsx";
import { useNavigate } from "react-router-dom";

type Props = {
  setisAuth: any;
};

const Logout = ({ setisAuth }: Props) => {
  const navigate = useNavigate();
  const logout = () => {
    //ログアウト
    signOut(auth).then(() => {
      localStorage.clear();
      setisAuth(false);
      // ログイン画面に移動
      navigate("/login");
    });
  };

  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};
export default Logout;
