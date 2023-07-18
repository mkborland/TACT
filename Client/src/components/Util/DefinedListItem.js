import { useNavigate } from "react-router-dom";
import {
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const DefinedListItem = ({ text, link }) => {
  const nav = useNavigate()
  return (
    <ListItem key={text} disablePadding>
      <ListItemButton onClick={() => nav(link)}>
        {/* <ListItemIcon>{icon}</ListItemIcon> */}
        <ListItemText primary={text} primaryTypographyProps={{fontSize: '1.1em'}}/>
      </ListItemButton>
    </ListItem>
  );
};

export default DefinedListItem;
