import "./App.css";
import LoginCard from "./components/LoginCard/LoginCard.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp.js";
import PersistentDrawerLeft from "./components/MainPage/MainPage.js";
import HistoryPage from "./pages/HistoryPage";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginCard />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/Dashboard" element={<PersistentDrawerLeft />}>
              <Route path="NewExercisePage" element={<LoginCard />} />
              <Route path="History" element={<HistoryPage />} />
              <Route path="EditDataTables" element={<LoginCard />} />
              <Route path="ManageUsers" element={<LoginCard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
