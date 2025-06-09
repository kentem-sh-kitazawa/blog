import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Logout from "./components/Logout.tsx";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [isAuth, setisAuth] = useState<string | null>(
    localStorage.getItem("isAuth")
  );
  return (
    <Router>
      <Navbar isAuth={isAuth} />
      <Routes>
        {/* URLの最後にpathを付け足すと行きたいコンポーネントを指定できる*/}
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/createpost"
          element={<CreatePost isAuth={isAuth} />}
        ></Route>
        <Route path="/login" element={<Login setisAuth={setisAuth} />}></Route>
        <Route
          path="/logout"
          element={<Logout setisAuth={setisAuth} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
