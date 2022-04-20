import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.css";

export default function NavBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.name}
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            {props.pages.map((page) => (
              <div className="NavBar_Buttons">
                <Button
                  key={page.title}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(page.route);
                  }}
                  sx={{
                    my: 1,
                    color: "white",
                    display: "flex",
                    fontSize: "20px",
                  }}
                >
                  {page.image ? (
                    <img
                      className="img"
                      src={page.image}
                      alt=""
                      width="40px"
                      height="40px"
                    ></img>
                  ) : null}
                  {page.title}
                </Button>
              </div>
            ))}
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
