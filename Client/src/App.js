import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginCard from "./components/LoginCard/LoginCard.js";
import SignUp from "./components/SignUp/SignUp.js";
import PersistentDrawerLeft from "./components/MainPage/MainPage.js";
import EditTables from "./components/EditTablesPage/EditTablesPage";
import ManageUsers from "./components/ManageUsersPage/ManageUsersPage";
import HistoryPage from "./pages/HistoryPage";
import DashboardPage from "./pages/DashboardPage";
import PlanningTool from "./pages/PlanningTool";
import FlightSearch from "./components/FlightSearch/FlightSearch";
import AirTypeTable from "./components/NewExerciseAircraftType/AirTypeTable";
import Lodging from "./components/Lodging/Lodging";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginCard />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/Dashboard" element={<PersistentDrawerLeft />}>
              <Route path="NewExercisePage" element={<AirTypeTable />} />
              <Route path="NewExercisePage-pg2" element={<FlightSearch />} />
              <Route path="NewExercisePage-pg3" element={<Lodging />} />
              <Route path="History" element={<HistoryPage />} />
              <Route path="DashboardPage" element={<DashboardPage />} />
              <Route path="PlanningToolPage" element={<PlanningTool />} />
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
