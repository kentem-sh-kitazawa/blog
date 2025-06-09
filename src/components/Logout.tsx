import { signOut } from "firebase/auth";
import { auth } from "../firebase.tsx";
import { useNavigate } from "react-router-dom";
import type { Dispatch, SetStateAction } from "react";

type Props = {
  setIsAuth: Dispatch<SetStateAction<boolean>>;
};

const Logout = ({ setIsAuth: setIsAuth }: Props) => {
  const navigate = useNavigate();
  const logout = () => {
    //ログアウト
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
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
