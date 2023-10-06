import DefinedListItem from "../Util/DefinedListItem.js";
import LogoutIcon from "@mui/icons-material/Logout";
import { Divider } from "@mui/material";

//This file controls the list in the mainpage drawer and changes what is shown depending on user role

const newExerciseForm = "/Dashboard/NewExerciseForm";
const NewDashboardPage = "/Dashboard/DashboardPage";
const NewPlanningTool = "/Dashboard/PlanningToolPage";
const HistoryPage = "/Dashboard/History";
const EditTablesPage = "/Dashboard/EditTablesPage";
const ManageUsersPage = "/Dashboard/ManageUsersPage";
const NewAnalysisTool = "/Dashboard/AnalysisToolPage";
const LoginPage = "/";

//list for admin role
const ActionObject = [
  {
    text: "Dashboard",
    link: NewDashboardPage,
  },
  {
    text: "Profile",
    link: ManageUsersPage,
  },
  {
    text: "Wing Planning Tool",
    link: NewPlanningTool,
  },
  {
    text: "Default Table",
    link: EditTablesPage,
  },
  {
    text: "New Exercise",
    link: newExerciseForm,
  },
  {
    text: "Analysis Tool",
    link: NewAnalysisTool,
  },
];
//list for general role
const ActionObjectGeneral = [
  {
    text: "Dashboard",
    link: NewDashboardPage,
  },
  {
    text: "Wing Planning Tool",
    link: NewPlanningTool,
  },
  { text: "History", link: HistoryPage },
];

const UserActionItems = (props) => {
  const { userInfo } = props;
  console.log("userInfo", userInfo);
  if (userInfo === undefined) {
    return (
      <>
        {" "}
        <DefinedListItem
          text="Log Out"
          icon={<LogoutIcon />}
          link={LoginPage}
        />
      </>
    );
  }
  if (userInfo.roleName === "Admin") {
    return (
      <>
        {ActionObject.map((items) => {
          return (
            <DefinedListItem
              key={items.text}
              text={items.text}
              link={items.link}
            />
          );
        })}
        <Divider />
        <DefinedListItem
          text="Log Out"
          icon={<LogoutIcon />}
          link={LoginPage}
        />
      </>
    );
  } else if (userInfo.roleName === "User") {
    return (
      <>
        {ActionObjectGeneral.map((items) => {
          return (
            <DefinedListItem
              key={items.text}
              text={items.text}
              link={items.link}
            />
          );
        })}
        <Divider />
        <DefinedListItem
          text="Log Out"
          icon={<LogoutIcon />}
          link={LoginPage}
        />
      </>
    );
  } else {
    return (
      <>
        {ActionObjectGeneral.map((items) => {
          return (
            <DefinedListItem
              key={items.text}
              text={items.text}
              link={items.link}
            />
          );
        })}
        <Divider />
        <DefinedListItem
          text="Log Out"
          icon={<LogoutIcon />}
          link={LoginPage}
        />
      </>
    );
  }
};
export default UserActionItems;
