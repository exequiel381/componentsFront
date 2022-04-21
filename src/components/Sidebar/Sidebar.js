import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { Divider } from "@mui/material";

export default function Sidebar(props) {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickRoute = (route) => {
    navigate(route);
  };

  return (
    <div style={{ width: props.open ? "300px" : "1px" }} className="Sidebar">
      <div style={{ display: props.open ? "block" : "none" }}>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,

            color: "white",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={<span className="title_Nav">{props.Titulo}</span>}
        >
          {props.items?.map((item) => {
            return (
              <>
                <ListItemButton
                  onClick={
                    item.subitems ? handleClick : handleClickRoute(item.route)
                  }
                >
                  <ListItemIcon>{item.icon ? item.icon : null}</ListItemIcon>
                  <ListItemText primary={props.text} />
                  {item.subitems ? (
                    <>{open ? <ExpandLess /> : <ExpandMore />}</>
                  ) : null}
                </ListItemButton>
                <Divider></Divider>
              </>
            );
          })}

          {/* <ListItemButton>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Sent mail" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton> */}

          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Prueba" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="ppp" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </div>
    </div>
  );
}
