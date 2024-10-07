import React, { useState } from "react";
import { LockOutlined } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import { Link } from "react-router-dom";
import UBLogo from "./../../images/UB_Logo.png"

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add login logic here
  };

  return (
    <Container
      component="main"
    //   maxWidth="xs"
      sx={{
        bgcolor: "#6C3777",
        height: "100vh",
        minWidth:"100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          mt:"-10%",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "#fff",
          p: "2%",
          height:"50%",
          width:"20%",
          borderRadius: "2%",
          boxShadow: "2%",
        }}
      >
        <img src={UBLogo} alt="UBLogo" width="70%"/>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box sx={{ mt: 1, width: "100%" }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
