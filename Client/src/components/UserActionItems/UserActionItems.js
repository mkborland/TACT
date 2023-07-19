import { useAppContext } from "../../context/AppContext.js";
import DefinedListItem from "../Util/DefinedListItem.js";
import CreateIcon from "@mui/icons-material/Create";
import HistoryIcon from "@mui/icons-material/History";
import AddIcon from "@mui/icons-material/Add";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider } from "@mui/material";

//This file controls the list in the mainpage drawer and changes what is shown depending on user role

const newExerciseForm = "/Dashboard/NewExerciseForm"
const NewDashboardPage = "/Dashboard/DashboardPage";
const HistoryPage = "/Dashboard/History";
const EditTablesPage = "/Dashboard/EditTablesPage";
const ManageUsersPage = "/Dashboard/ManageUsersPage";
const LoginPage = "/";
//list for admin role
const ActionObject = [
  {
    text: "Dashboard",
    link: NewDashboardPage,
  },
  { text: "Profile", link: ManageUsersPage },
  //just goes to dashboard until page is made
  { text: "New Form", link: "/Dashboard" },
  {
    text: "Default Table",
    link: EditTablesPage,
  },
  {text: "New Exercise",
    link: newExerciseForm}
];
//list for general role
const ActionObjectGeneral = [
  { text: "History", link: HistoryPage },
];

const UserActionItems = () => {
  const { UserInfo } = useAppContext();
  if(UserInfo == undefined){
    return <></>
  }
  if (UserInfo.access === "admin") {
    return (
      <>
        {ActionObject.map((items) => {
          return (
            <DefinedListItem
              text={items.text}
              link={items.link}
            />
          );
        })}
        <Divider />
        <DefinedListItem text="Log Out" icon={<LogoutIcon/>} link={LoginPage}/>
      </>
    );
  } else if (UserInfo.access === "general") {
    return (
      <>
        {ActionObjectGeneral.map((items) => {
          return (
            <DefinedListItem
              text={items.text}
              link={items.link}
            />
          );
        })}

      </>
    );
  }
};
export default UserActionItems;
