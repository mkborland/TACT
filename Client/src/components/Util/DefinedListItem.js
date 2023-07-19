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

//returns current date as "year-month-day"
export function GetCurrentDate() {
    let newDate = new Date()
    let day = newDate.getDate()
    let month = newDate.getMonth()
    let year = newDate.getFullYear()

    return `${year}-${month}-${day}`
}

export default DefinedListItem;
