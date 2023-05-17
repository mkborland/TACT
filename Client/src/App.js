import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginCard from "./components/LoginCard/LoginCard.js";
import SignUp from "./components/SignUp/SignUp.js";
import PersistentDrawerLeft from "./components/MainPage/MainPage.js";
<<<<<<< HEAD
=======
// import SearchRoot from "./pages/search-root";
>>>>>>> manage_users_page
import LocationField from "./components/LocationField/LocationField.js"
import EditTables from "./components/EditTablesPage/EditTablesPage";
import ManageUsers from './components/ManageUsersPage/ManageUsersPage';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <LoginCard/>
      </header> */}
      <div className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginCard />} />
            <Route path="/signup" element={<SignUp />} />
            {/* <Route path="/mainpage" element={<MainPage />}/> */}
            <Route path="/locationfield" element={<LocationField />} />
            <Route path="/" element={<PersistentDrawerLeft />}>
<<<<<<< HEAD
              <Route path="EditTablesPage" element={<EditTables />} />
=======
              <Route path="EditTablesPage" element={<EditTables/>}/>
              <Route path="ManageUsersPage" element={<ManageUsers/>}/>
>>>>>>> manage_users_page
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
