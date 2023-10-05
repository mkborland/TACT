import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoginCard from "./components/LoginCard/LoginCard.js";
import SignUp from "./components/SignUp/SignUp.js";
import PersistentDrawerLeft from "./components/MainPage/MainPage.js";
import EditTables from "./components/EditTablesPage/EditTablesPage";
import ManageUsers from "./components/ManageUsersPage/ManageUsersPage";
import DashboardPage from "./pages/DashboardPage";
import NewExerciseForm from "./components/NewExerciseForm/NewExerciseForm";
import { PlanningTool } from "./components/PlanningTool/PlanningTool";
import AnalysisTool from "./components/AnalysisTool/AnalysisTool";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { useState } from "react";

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <div className="App-header">
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={<PrivateRoute setUser={setUser} />}
            />
            {/* <Route path="/" element={<LoginCard />} /> */}
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/Dashboard"
              element={<PersistentDrawerLeft user={user} />}
            >
              <Route
                path="DashboardPage"
                element={<DashboardPage user={user} />}
              />
              <Route
                path="PlanningToolPage"
                element={<PlanningTool user={user} />}
              />
              <Route
                path="EditTablesPage"
                element={<EditTables user={user} />}
              />
              <Route
                path="ManageUsersPage"
                element={<ManageUsers user={user} />}
              />
              <Route
                path="NewExerciseForm"
                element={<NewExerciseForm user={user} />}
              />
              <Route
                path="AnalysisToolPage"
                element={<AnalysisTool user={user} />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
