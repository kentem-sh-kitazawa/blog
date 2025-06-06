import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Logout from "./components/Logout.tsx";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";

function App() {
  const [isAuth, setisAuth] = useState<any>(false);
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* URLの最後にpathを付け足すと行きたいコンポーネントを指定できる*/}
        <Route path="/" element={<Home />}></Route>
        <Route path="/createpost" element={<CreatePost />}></Route>
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
