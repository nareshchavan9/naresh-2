import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppBar, Toolbar, Button, Container, Box } from '@mui/material';
import theme from './theme/theme';
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default' }}>
          <AppBar position="static" color="transparent" elevation={1}>
            <Toolbar>
              <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
                <Button color="primary" variant="text" href="/signup">
                  Sign Up
                </Button>
                <Button color="primary" variant="contained" href="/login">
                  Login
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
          
          <Container maxWidth="sm" sx={{ mt: 8 }}>
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Login />} />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
