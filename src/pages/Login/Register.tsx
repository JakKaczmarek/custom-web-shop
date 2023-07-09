import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useContext, useState } from "react";
import { useSnackbar } from "notistack";
import { AuthContext } from "../../contexts/AuthContext";

function Register() {
  const { handleRegisterSubmit } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    handleRegisterSubmit(e);
    enqueueSnackbar("New account created!");
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
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleFormSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
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
              margin="normal"
              required
              error={error}
              fullWidth
              name="password"
              label="Password"
              InputLabelProps={{ style: { color: "gray" } }}
              type="password"
              id="password"
              autoComplete="new-password"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldSet": {
                    borderColor: "gray",
                  },
                },
              }}
            />
            <Button
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
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Register;
