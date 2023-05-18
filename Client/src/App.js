import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginCard from "./components/LoginCard/LoginCard.js";
import SignUp from "./components/SignUp/SignUp.js";
import PersistentDrawerLeft from "./components/MainPage/MainPage.js";
import LocationField from "./components/LocationField/LocationField.js";
import EditTables from "./components/EditTablesPage/EditTablesPage";
import ManageUsers from "./components/ManageUsersPage/ManageUsersPage";
import HistoryPage from "./pages/HistoryPage";
import FlightSearch from "./components/FlightSearch/FlightSearch";
import NewExercisePage from "./pages/NewExercisePage";

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
            <Route path="/flightsearch" element={<FlightSearch />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
