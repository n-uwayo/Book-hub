import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useUser } from "./UserContext";


const Navbar: React.FC = () => {
    const { user, login, logout } = useUser();
  return (
    <AppBar position="sticky" className="navbar">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Nyenyeri Book Hub
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>

        {user ? (
          <>
            <Typography variant="body1" style={{ marginRight: "10px" }}>
              {user.name}
            </Typography>
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <Button color="inherit" onClick={() => login({ id: "1", name: "Test User", email: "" })}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
