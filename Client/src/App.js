import './App.css';
import LoginCard from './LoginCard.js';
import SearchRoot from "./pages/search-root";
import "./App.css";
import LoginCard from "./components/LoginCard/LoginCard.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginCard/>
      </header>
      <SearchRoot />
      <div className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginCard />} />
            <Route path="/signup" element={<SignUp />} />
            {/* <Route path="/mainpage" element={<MainPage />}/> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
