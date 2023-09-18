import React from "react";
import { Outlet } from "react-router-dom";
import UserActionItems from "../UserActionItems/UserActionItems.js";
// import { useAppContext } from "../../context/AppContext.js";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
// import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const MainPage = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: 100,
  // alignItems: "right",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "center",
}));

export default function PersistentDrawerLeft(props) {
  const { user } = props;
  // const theme = useTheme();
  const [open] = React.useState(true);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  // const { UserInfo } = useAppContext();
  // const nav = useNavigate()

  const title = () => {
    if (user) {
      return `Welcome, ${user.firstName} ${user.lastName}`;
    } else {
      return "Please Log In";
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ backgroundColor: "#333333" }}
      ></AppBar>
      <Drawer
        // here is the styling for the left side drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: 7,
            borderColor: "#eddc48",
            backgroundColor: "grey.200",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <img src="/tact_logo.png" alt="image" />
        </DrawerHeader>
        <List>
          <UserActionItems userInfo={user} />
        </List>
      </Drawer>
      <MainPage open={open}>
        <Typography
          justifyContent="space-between"
          variant="h2"
          noWrap={true}
          component="div"
          align="left"
        >
          {title()}
        </Typography>
        <DrawerHeader />
        <Outlet />
      </MainPage>
    </Box>
  );
}
