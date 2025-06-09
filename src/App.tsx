import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Logout from "./components/Logout.tsx";
import Navbar from "./components/Navbar";

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(
    localStorage.getItem("isAuth") === "true"
  );

  return (
    <Router>
      <Navbar isAuth={isAuth} />
      <Routes>
        {/* URLの最後にpathを付け足すと行きたいコンポーネントを指定できる*/}
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/createPost"
          element={<CreatePost isAuth={isAuth} />}
        ></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
        <Route
          path="/logout"
          element={<Logout setIsAuth={setIsAuth} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
