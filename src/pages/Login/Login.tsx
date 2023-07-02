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
import { useContext, useState } from "react";
import logoebike from "../../img/logoebike.png";
import { AuthContext } from "../../contexts/AuthContext";

function Login() {
  const { loginError, handleSubmit, logoSubmit } = useContext(AuthContext);
  const [error, setError] = useState(loginError);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    handleSubmit(e);
  };

  const theme = createTheme();

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
            className="logoebikeImage"
            onClick={logoSubmit}
          />

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleFormSubmit}
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
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              data-testid="login-button"
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                background: "black",
                "&:hover": {
                  backgroundColor: "gray",
                  color: "white",
                },
              }}
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
      </Container>
    </ThemeProvider>
  );
}

export default Login;
