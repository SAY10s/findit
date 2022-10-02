import "./styles/App.css";
import LandingPage from "../layouts/LandingPage";
import Error404 from "../layouts/Error404";
import SignIn from "./SignIn";
import CreateAccount from "./CreateAccount";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/createaccount" element={<CreateAccount />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
