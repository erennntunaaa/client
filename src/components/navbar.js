import React from "react";
import { AppBar, Typography, Toolbar, Box } from "@material-ui/core";


const NavigationBar = () => {
  return (
    <div>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "#ffffff00" }}
        elevation={0}
      >
        <Toolbar>
          <Typography variant="title" className="title">
            Movie Club
          </Typography>
          <Box m={2} />
          <Typography variant="title" className="title">
            Book Club
          </Typography>
          <Box m={2} />
          <Typography variant="title" className="title">
            Series Club
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
