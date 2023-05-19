import { useAppContext } from "../../context/AppContext";
import DefinedListItem from "../Util/DefinedListItem";
import CreateIcon from "@mui/icons-material/Create";
import HistoryIcon from "@mui/icons-material/History";
import AddIcon from "@mui/icons-material/Add";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";


const NewExercisePage = "/Dashboard/NewExercisePage"
const HistoryPage = "/Dashboard/History";
const EditTablesPage = "/Dashboard/EditTablesPage";
const ManageUsersPage = "/Dashboard/ManageUsersPage";

const ActionObject = [
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
];

const ActionObjectGeneral = [
  {
    text: "New Exercise",
    icon: <AddIcon />,
    link: NewExercisePage,
  },
  { text: "History", icon: <HistoryIcon />, link: HistoryPage },
];

const UserActionItems = () => {
  const { UserInfo } = useAppContext();
  console.log(UserInfo);
  if (UserInfo.access === "admin") {
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

        {/* <DefinedListItem
          text="New Exercise"
          icon={<CreateIcon />}
          onClick={NewExercisePage}
        /> */}
      </>
    );
  }else if( UserInfo.access === "general" ){
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
