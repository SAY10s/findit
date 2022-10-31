// import "./styles/AppDark.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ThemeChange from "../components/ThemeChange";
import LandingPage from "../layouts/LandingPage";
import Error404 from "../layouts/Error404";
import SignIn from "./SignIn";
import CreateAccount from "./CreateAccount";
import TestPanel from "./TestPanel";
import Panel from "./Panel";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [nameAndSurname, setNameAndSurname] = useState("Kate Bundy");

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
        />
        <Route
          path="/signin"
          element={
            <SignIn isDark={isDark} setNameAndSurname={setNameAndSurname} />
          }
        />
        <Route
          path="/createaccount"
          element={<CreateAccount isDark={isDark} />}
        />
        <Route
          path="/panel/*"
          element={<Panel isDark={isDark} nameAndSurname={nameAndSurname} />}
        />
        <Route
          path="/test"
          element={
            <TestPanel isDark={isDark} nameAndSurname={nameAndSurname} />
          }
        />
        <Route path="*" element={<Error404 isDark={isDark} />} />
      </Routes>
    </Router>
  );
}

export default App;
