import React, { useState } from "react";
import { registerUser } from "../api/api";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Alert,
  IconButton,
  InputAdornment,
  Grid
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await registerUser(form);
      setMessage("success");
    } catch (err) {
      setMessage("error");
    }
    setIsLoading(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            bgcolor: "secondary.main",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 1,
          }}
        >
          <PersonAddOutlinedIcon sx={{ color: "white" }} />
        </Box>
        <Typography component="h1" variant="h4" gutterBottom>
          Create Account
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Please fill in your details to get started
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="new-password"
                value={form.password}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>

          {message && (
            <Alert 
              severity={message === "success" ? "success" : "error"} 
              sx={{ mt: 2 }}
            >
              {message === "success" 
                ? "Account created successfully! You can now login." 
                : "Error creating account. Please try again."}
            </Alert>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Signup;
