import { useAppContext } from "../../context/AppContext.js";
import DefinedListItem from "../Util/DefinedListItem.js";
import CreateIcon from "@mui/icons-material/Create";
import HistoryIcon from "@mui/icons-material/History";
import AddIcon from "@mui/icons-material/Add";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider } from "@mui/material";

const newExerciseForm = "/Dashboard/NewExerciseForm"
const NewExercisePage = "/Dashboard/NewExercisePage"
const NewDashboardPage = "/Dashboard/DashboardPage";
const HistoryPage = "/Dashboard/History";
const EditTablesPage = "/Dashboard/EditTablesPage";
const ManageUsersPage = "/Dashboard/ManageUsersPage";
const LoginPage = "/";

const ActionObject = [
  {
    text: "Dashboard",
    link: NewDashboardPage,
  },
  { text: "Profile", link: ManageUsersPage },
  { text: "New Form", link: NewExercisePage },
  {
    text: "Tables",
    link: EditTablesPage,
  },
  {text: "New Exercise",
    link: newExerciseForm}
];

const ActionObjectGeneral = [
  {
    text: "New Exercise",
    link: NewExercisePage,
  },
  { text: "History", link: HistoryPage },
];

const UserActionItems = () => {
  const { UserInfo } = useAppContext();
  console.log(UserInfo);
  if(UserInfo == undefined){
    return <></>
  }
  if (UserInfo.access === "admin") {
    console.log(`***ACTIONOBJECT[0] = ${ActionObject[0]}`)
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
