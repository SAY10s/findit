// import "./styles/AppDark.css";
import ThemeChange from "../components/ThemeChange";
import LandingPage from "../layouts/LandingPage";
import Error404 from "../layouts/Error404";
import SignIn from "./SignIn";
import CreateAccount from "./CreateAccount";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);
  let cssPath = "./styles/AppDark.css";
  isDark ? (cssPath = "./AppDark.css") : (cssPath = "./AppLight.css");

  return (
    <Router>
      <ThemeChange isDark={isDark} isDarkFunction={setIsDark} />
      <link rel="stylesheet" type="text/css" href={cssPath} />
      <Routes>
        <Route
          path="/"
          element={<LandingPage isDark={isDark} isDarkFunction={setIsDark} />}
        ></Route>
        <Route path="/signin" element={<SignIn isDark={isDark} />}></Route>
        <Route
          path="/createaccount"
          element={<CreateAccount isDark={isDark} />}
        ></Route>
        <Route path="*" element={<Error404 isDark={isDark} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
