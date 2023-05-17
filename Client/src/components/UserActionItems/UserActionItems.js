import { useAppContext } from "../../context/AppContext";
import DefinedListItem from "../Util/DefinedListItem";
import CreateIcon from "@mui/icons-material/Create";
import HistoryIcon from "@mui/icons-material/History";
import AddIcon from "@mui/icons-material/Add";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const NewExercisePage = () => {};

const ActionObject = [
  {
    text: "New Exercise",
    icon: <AddIcon />,
    onClick: NewExercisePage,
  },
  { text: "History", icon: <HistoryIcon />, onClick: NewExercisePage },
  { text: "Edit Data Table", icon: <CreateIcon />, onClick: NewExercisePage },
  {
    text: "Manage Users",
    icon: <ManageAccountsIcon />,
    onClick: NewExercisePage,
  },
];

const UserActionItems = () => {
  const { UserInfo } = useAppContext();
  console.log(UserInfo);
  if (UserInfo.access === "user") {
    return (
      <>
        {ActionObject.map((items) => {
          return (
            <DefinedListItem
              text={items.text}
              icon={items.icon}
              onClick={items.onClick}
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
