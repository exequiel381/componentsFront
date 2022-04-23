import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { Divider } from "@mui/material";

const Sidebar = (props) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    if (document.getElementById(id)) {
      if (document.getElementById(id).style.display === "none") {
        document.getElementById(id).style.display = "flex";
        document.getElementById(id + "less").style.opacity = "100%";
        document.getElementById(id + "more").style.opacity = "0%";
      } else {
        document.getElementById(id).style.display = "none";
        document.getElementById(id + "less").style.opacity = "0%";
        document.getElementById(id + "more").style.opacity = "100%";
      }
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
          subheader={<span className="title_Nav">{props.sideTitle}</span>}
        >
          <>
            <Divider></Divider>
            {props.pagesForSide?.map((page, index) => {
              if (page.subPages !== undefined) {
                return (
                  <>
                    <ListItemButton
                      key={index}
                      onClick={() => handleClick(page.text)}
                    >
                      <ListItemIcon>{page.icon}</ListItemIcon>
                      <h3>{page.text}</h3>
                      <div
                        id={page.text + "less"}
                        style={{ opacity: "0%", marginLeft: "20%" }}
                      >
                        <ExpandLess />
                      </div>
                      <div id={page.text + "more"}>
                        <ExpandMore />
                      </div>
                    </ListItemButton>
                    <Divider></Divider>

                    <div
                      id={page.text}
                      style={{ display: "none", marginLeft: "20%" }}
                    >
                      <List component="div" disablePadding>
                        {page.subPages.map((subPage, index) => {
                          return (
                            <ListItemButton
                              sx={{ pl: 0 }}
                              key={index}
                              onClick={() => handleClickRoute(page.route)}
                            >
                              <ListItemIcon>{subPage.icon}</ListItemIcon>
                              <h3>{subPage.text}</h3>
                            </ListItemButton>
                          );
                        })}
                      </List>
                    </div>
                  </>
                );
              } else {
                return (
                  <>
                    <ListItemButton
                      onClick={() => handleClickRoute(page.route)}
                      key={index}
                    >
                      <ListItemIcon>{page.icon}</ListItemIcon>
                      <h3>{page.text}</h3>
                    </ListItemButton>
                    <Divider></Divider>
                  </>
                );
              }
            })}
          </>

          {/* <ListItemButton onClick={handleClick}>
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
          </Collapse> */}
        </List>
      </div>
    </div>
  );
};

export default Sidebar;
