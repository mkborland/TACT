import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginCard from "./components/LoginCard/LoginCard.js";
import SignUp from "./components/SignUp/SignUp.js";
import PersistentDrawerLeft from "./components/MainPage/MainPage.js";
import EditTables from "./components/EditTablesPage/EditTablesPage";
import ManageUsers from "./components/ManageUsersPage/ManageUsersPage";
import DashboardPage from "./pages/DashboardPage";
import NewExerciseForm from "./components/NewExerciseForm/NewExerciseForm";
import PlanningTool from "./components/PlanningTool/PlanningTool";
import AnalysisTool from "./components/AnalysisTool/AnalysisTool";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginCard />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/Dashboard" element={<PersistentDrawerLeft />}>
              <Route path="DashboardPage" element={<DashboardPage />} />
              <Route path="PlanningToolPage" element={<PlanningTool />} />
              <Route path="EditTablesPage" element={<EditTables />} />
              <Route path="ManageUsersPage" element={<ManageUsers />} />
              <Route path="NewExerciseForm" element={<NewExerciseForm />} />
              <Route path="AnalysisToolPage" element={<AnalysisTool />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
