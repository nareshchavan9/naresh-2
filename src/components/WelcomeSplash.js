import React, { useEffect, useState } from 'react';
import { Box, Typography, Fade, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { keyframes } from '@mui/system';

// Define animations
const gradientMove = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const glowAnimation = keyframes`
  0% {
    text-shadow: 0 0 10px rgba(255,255,255,0.8),
                 0 0 20px rgba(255,255,255,0.8),
                 0 0 30px rgba(255,255,255,0.8);
  }
  50% {
    text-shadow: 0 0 20px rgba(255,255,255,0.9),
                 0 0 40px rgba(255,255,255,0.9),
                 0 0 60px rgba(255,255,255,0.9);
  }
  100% {
    text-shadow: 0 0 10px rgba(255,255,255,0.8),
                 0 0 20px rgba(255,255,255,0.8),
                 0 0 30px rgba(255,255,255,0.8);
  }
`;

const WelcomeSplash = () => {
  const navigate = useNavigate();
  const [showProgress, setShowProgress] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);
  
  useEffect(() => {
    // Show progress after welcome message fades in
    const progressTimer = setTimeout(() => {
      setShowProgress(true);
    }, 1000);

    // Show subtext after progress
    const subtextTimer = setTimeout(() => {
      setShowSubtext(true);
    }, 1500);

    // Navigate to login after animation
    const navigationTimer = setTimeout(() => {
      navigate('/login');
    }, 3500);

    return () => {
      clearTimeout(progressTimer);
      clearTimeout(subtextTimer);
      clearTimeout(navigationTimer);
    };
  }, [navigate]);

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
        backgroundSize: '400% 400%',
        animation: `${gradientMove} 15s ease infinite`,
        overflow: 'hidden',
      }}
    >
      <Fade in={true} timeout={1000}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            animation: `${floatAnimation} 6s ease-in-out infinite`,
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
              textAlign: 'center',
              animation: `${glowAnimation} 3s ease-in-out infinite`,
              mb: 2,
            }}
          >
            Welcome
          </Typography>

          <Fade in={showSubtext} timeout={1000}>
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255,255,255,0.9)',
                fontWeight: 300,
                textAlign: 'center',
                letterSpacing: '3px',
                textTransform: 'uppercase',
              }}
            >
              to my app
            </Typography>
          </Fade>
          
          <Fade in={showProgress} timeout={500}>
            <CircularProgress
              size={45}
              thickness={4}
              sx={{
                color: 'rgba(255,255,255,0.9)',
                mt: 2,
              }}
            />
          </Fade>
        </Box>
      </Fade>
    </Box>
  );
};

export default WelcomeSplash;