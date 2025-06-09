import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilePen,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import "../style/Navbar.css";

type Props = {
  isAuth: boolean;
};

const Navbar = ({ isAuth }: Props) => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      {/* ログイン状態でボタンの表示を切り替える処理 */}
      {!isAuth ? (
        <Link to="/login">
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          ログイン
        </Link>
      ) : (
        <>
          <Link to="/createpost">
            <FontAwesomeIcon icon={faFilePen} />
            記事投稿
          </Link>
          <Link to="/logout">
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            ログアウト
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
