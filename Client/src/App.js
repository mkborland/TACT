import "./App.css";
import LoginCard from "./components/LoginCard/LoginCard.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp.js";
import PersistentDrawerLeft from "./components/MainPage/MainPage.js";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PersistentDrawerLeft />}>
              <Route path="test" element={<LoginCard />} />
              <Route path="signup" element={<SignUp />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
