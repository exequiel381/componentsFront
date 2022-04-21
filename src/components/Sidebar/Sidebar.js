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
  const handleClick = (id) => {
    if (document.getElementById(id).style.display === "none") {
      document.getElementById(id).style.display = "flex";
      document.getElementById(id + "less").style.opacity = "100%";
      document.getElementById(id + "more").style.opacity = "0%";
    } else {
      document.getElementById(id).style.display = "none";
      document.getElementById(id + "less").style.opacity = "0%";
      document.getElementById(id + "more").style.opacity = "100%";
    }
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
          {props.pagesForSide?.map((page) => {
            console.log("Debo entrar 4 veces");
            if (page.subPages) {
              return (
                <>
                  <ListItemButton onClick={handleClick(page.title)}>
                    <ListItemIcon>{page.icon}</ListItemIcon>
                    <ListItemText primary={page.title} />
                    <div id={page.text + "less"} style={{ opacity: "0%" }}>
                      <ExpandLess />
                    </div>
                    <div id={page.text + "more"}>
                      <ExpandMore />
                    </div>
                  </ListItemButton>

                  <div id={page.text} style={{ display: "none" }}>
                    <List component="div" disablePadding>
                      {page.subPages.map((subPage) => {
                        return (
                          <ListItemButton
                            onClick={handleClickRoute(page.route)}
                          >
                            <ListItemIcon>{subPage.icon}</ListItemIcon>
                            <ListItemText primary={subPage.title} />
                          </ListItemButton>
                        );
                      })}
                    </List>
                  </div>
                </>
              );
            } else {
              return (
                <ListItemButton onClick={handleClickRoute(page.route)}>
                  <ListItemIcon>{page.icon}</ListItemIcon>
                  <ListItemText primary={page.title} />
                </ListItemButton>
              );
            }
          })}

          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
            {open ? <ExpandLess id="icono" /> : <ExpandMore />}
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
        </List>
      </div>
    </div>
  );
}
