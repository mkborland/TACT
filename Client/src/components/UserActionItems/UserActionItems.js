import { useAppContext } from "../../context/AppContext.js";
import DefinedListItem from "../Util/DefinedListItem.js";
import CreateIcon from "@mui/icons-material/Create";
import HistoryIcon from "@mui/icons-material/History";
import AddIcon from "@mui/icons-material/Add";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider } from "@mui/material";


const NewDashboardPage = "/Dashboard/DashboardPage";
const NewExercisePage = "/Dashboard/NewExercisePage";
const HistoryPage = "/Dashboard/History";
const EditTablesPage = "/Dashboard/EditTablesPage";
const ManageUsersPage = "/Dashboard/ManageUsersPage";
const LoginPage = "/";

const ActionObject = [
  {
    text: "Dashboard",
    icon: <HistoryIcon />,
    link: NewDashboardPage,
  },
  {
    text: "New Exercise",
    icon: <AddIcon />,
    link: NewExercisePage,
  },
  { text: "History", icon: <HistoryIcon />, link: HistoryPage },
  { text: "Edit Data Table", icon: <CreateIcon />, link: EditTablesPage },
  {
    text: "Manage Users",
    icon: <ManageAccountsIcon />,
    link: ManageUsersPage,
  },
  // {
  //   text: "Log Out",
  //   icon: <LogoutIcon/>,
  //   link: LoginPage
  // }
];

const ActionObjectGeneral = [
  {
    text: "New Exercise",
    icon: <AddIcon />,
    link: NewExercisePage,
  },
  { text: "History", icon: <HistoryIcon />, link: HistoryPage },
  // {
  //   text: "Log Out",
  //   icon: <LogoutIcon/>,
  //   link: LoginPage
  // }
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
              icon={items.icon}
              link={items.link}
            />
          );
        })}
        <Divider />
        <DefinedListItem text="Log Out" icon={<LogoutIcon/>} link={LoginPage}/>

        {/* <DefinedListItem
          text="New Exercise"
          icon={<CreateIcon />}
          onClick={NewExercisePage}
        /> */}
      </>
    );
  } else if (UserInfo.access === "general") {
    return (
      <>
        {ActionObjectGeneral.map((items) => {
          return (
            <DefinedListItem
              text={items.text}
              icon={items.icon}
              link={items.link}
            />
          );
        })}

        {/* <DefinedListItem
          text="New Exercise"
          icon={<CreateIcon />}
          onClick={NewExercisePage}
        /> */}
      </>
    );
  }
};
export default UserActionItems;
