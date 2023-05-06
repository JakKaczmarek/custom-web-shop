import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import logoebike from "../../components/NavBar/logoebike.png";
import { AuthContext } from "../../contexts/AuthContext";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      /* eslint-disable react/jsx-props-no-spreading */
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000/">
        eBike Shop{" "}
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const { error, logoSumbit, handleSubmit } = useContext(AuthContext);
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            type="image"
            src={logoebike}
            alt="logoebike"
            style={{ width: 190, height: 80 }}
            onClick={logoSumbit}
          />

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              inputProps={{ "data-testid": "email-input" }}
              margin="normal"
              required
              error={error}
              fullWidth
              id="email"
              label="Email Address"
              InputLabelProps={{ style: { color: "gray" } }}
              name="email"
              autoComplete="email"
              autoFocus
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldSet": {
                    borderColor: "gray",
                  },
                },
              }}
            />
            <TextField
              inputProps={{ "data-testid": "password-input" }}
              margin="normal"
              required
              error={error}
              fullWidth
              name="password"
              label="Password"
              InputLabelProps={{ style: { color: "gray" } }}
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldSet": {
                    borderColor: "gray",
                  },
                },
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  labelstyle={{ color: "white" }}
                  iconstyle={{ color: "white" }}
                />
              }
              label="Remember me"
            />
            <Button
              data-testid="login-button"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: "black" }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  href="!#"
                  variant="body2"
                  sx={{ color: "black", textDecorationColor: "grey" }}
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="!#"
                  variant="body2"
                  sx={{ color: "black", textDecorationColor: "grey" }}
                >
                  Do not have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
