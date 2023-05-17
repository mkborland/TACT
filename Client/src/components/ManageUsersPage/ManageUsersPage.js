import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { Divider, Icon } from '@mui/material';
import UserInfo from './UserInfoCard';

const ManageUsers = ()  => {
    const ExpandMoreNew = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      }));
        const [expandedNew, setExpandedNew] = React.useState(false);
      
        const handleExpandClickNew = () => {
          setExpandedNew(!expandedNew);
        };

        const ExpandMoreCurrent = styled((props) => {
            const { expand, ...other } = props;
            return <IconButton {...other} />;
          })(({ theme, expand }) => ({
            transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
              duration: theme.transitions.duration.shortest,
            }),
          }));
            const [expandedCurrent, setExpandedCurrent] = React.useState(false);
          
            const handleExpandClickCurrent = () => {
              setExpandedCurrent(!expandedCurrent);
            };


    return (
        <div>
        <Card sx={{ minWidth: 450 }}>
          <CardActions>
          <Icon sx={{margin: 1}}><GroupAddIcon/></Icon>
            <Typography sx={{marginLeft: 2}} variant="h6" color="text.primary">
              Account requests
            </Typography>
            <ExpandMoreNew
              expand={expandedNew}
              onClick={handleExpandClickNew}
              aria-expanded={expandedNew}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMoreNew>
          </CardActions>
          <Divider/>
          <Collapse in={expandedNew} timeout="auto" unmountOnExit>
            <CardContent>
                
              {/* add new user requests here */}
              {UserInfo("Wanna B.","2","pending")}
            </CardContent>
          </Collapse>
        </Card>
        <Card sx={{ minWidth: 450, marginTop: 3}}>
        <CardActions>
        <Icon sx={{margin: 1}}><PersonSearchIcon/></Icon>
          <Typography sx={{marginLeft: 2}} variant="h6" color="text.primary">
            Current Accounts
          </Typography>
          <ExpandMoreCurrent
            expand={expandedCurrent}
            onClick={handleExpandClickCurrent}
            aria-expanded={expandedCurrent}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMoreCurrent>
        </CardActions>
        <Divider/>
        <Collapse in={expandedCurrent} timeout="auto" unmountOnExit>
            <CardContent>
            {/* add current users here */}
            {UserInfo("Billy Joel","1","Mother")}
            </CardContent>
        </Collapse>
      </Card>
      </div>
      );
}





export default ManageUsers;