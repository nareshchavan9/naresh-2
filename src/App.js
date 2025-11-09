import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppBar, Toolbar, Button, Container, Box, Fade } from '@mui/material';
import theme from './theme/theme';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import WelcomeSplash from "./components/WelcomeSplash";

// Wrapper component for page transitions
const PageTransition = ({ children }) => {
  const location = useLocation();
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setShowPage(true);
  }, [location]);

  return (
    <Fade in={showPage} timeout={800}>
      <div>{children}</div>
    </Fade>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeSplash />} />
          <Route
            path="*"
            element={
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
                  <PageTransition>
                    <Routes>
                      <Route path="/signup" element={<Signup />} />
                      <Route path="/login" element={<Login />} />
                    </Routes>
                  </PageTransition>
                </Container>
              </Box>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
