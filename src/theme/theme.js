import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3', // A nice blue shade
      light: '#64B5F6',
      dark: '#1976D2',
      contrastText: '#fff',
    },
    secondary: {
      main: '#FF4081', // A complementary pink shade
      light: '#FF80AB',
      dark: '#F50057',
      contrastText: '#fff',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h4: {
      fontWeight: 600,
      color: '#1A237E',
      letterSpacing: '0.2px',
    },
    h5: {
      fontWeight: 500,
      color: '#1A237E',
      letterSpacing: '0.1px',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px 24px',
        },
        contained: {
          boxShadow: '0 3px 6px rgba(0,0,0,0.16)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#2196F3',
            },
          },
        },
      },
    },
  },
});

export default theme;