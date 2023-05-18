import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const DefinedListItem = ({ text, icon, link }) => {
  const nav = useNavigate()
  return (
    <ListItem key={text} disablePadding>
      <ListItemButton onClick={() => nav(link)}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default DefinedListItem;
