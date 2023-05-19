import TactApi from "../../api/TactApi.js";
import { IconButton, Typography } from "@mui/material"
import BlockIcon from '@mui/icons-material/Block';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { red, green } from '@mui/material/colors';

const UserInfo = (name, id, role) => {

    const handleAccept = (e, id) => {
        TactApi.updateUser({ userid: id, authkey: "54321" }).then(
            data => {
                console.log(data);
                window.location.reload(true);
            }
        )
    }

    const handlePromote = (e, id) => {
        TactApi.updateUser({ userid: id, authkey: "12345" }).then(
            data => {
                console.log(data);
                window.location.reload(true);
            }
        )
    }

    const handleDemote = (e, id) => {
        TactApi.updateUser({ userid: id, authkey: "54321" }).then(
            data => {
                console.log(data);
                window.location.reload(true);
            }
        )
    }


    if (role === "pending") {
        return (<Typography key={id} align="left" noWrap={true}>• UserName: {name} Role: {role} <IconButton><BlockIcon sx={{ color: red[500] }} /></IconButton><IconButton onClick={(e) => handleAccept(e, id)}><CheckCircleIcon sx={{ color: green[500] }} /></IconButton></Typography>)
    }
    return (<Typography key={id} align="left" noWrap={true}>• UserName: {name} Role: {role}<IconButton onClick={(e) => handleDemote(e, id)}><RemoveCircleOutlineIcon sx={{ color: red[500] }} /></IconButton><IconButton onClick={(e) => handlePromote(e, id)}><ControlPointIcon sx={{ color: green[500] }} /></IconButton></Typography>)
}

export default UserInfo