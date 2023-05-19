import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginCard from "./components/LoginCard/LoginCard.js";
import SignUp from "./components/SignUp/SignUp.js";
import PersistentDrawerLeft from "./components/MainPage/MainPage.js";
import LocationField from "./components/LocationField/LocationField.js";
import EditTables from "./components/EditTablesPage/EditTablesPage.js";
import ManageUsers from "./components/ManageUsersPage/ManageUsersPage.js";
import HistoryPage from "./pages/HistoryPage.js";
import NewExercisePage from "./pages/NewExercisePage.js";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginCard />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/locationfield" element={<LocationField />} />
            <Route path="/Dashboard" element={<PersistentDrawerLeft />}>
              <Route path="NewExercisePage" element={<NewExercisePage />} />
              <Route path="History" element={<HistoryPage />} />
              <Route path="EditTablesPage" element={<EditTables />} />
              <Route path="ManageUsersPage" element={<ManageUsers />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
