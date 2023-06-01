import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "background.paper",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              E-Bike
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              <div className="text-center p-3">
                &copy; {new Date().getFullYear()} Copyright: &nbsp;
                <a className="text-dark" href="http://localhost:3000/login">
                  e-bike.com/login
                </a>
              </div>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
