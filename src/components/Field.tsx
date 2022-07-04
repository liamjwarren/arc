import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


const theme = createTheme({
    palette: {
      primary: {
        main: "#980303",
      },
      secondary: {
        main: "#980303",
      },
    },
  });

export default function Field() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container>
          <Typography align="center"><h1>Fields</h1></Typography>
          <Typography align="center"><h2>All games will be taking place either at the 100 Crosbie Road, St. John's, NL, A1B 3W4</h2></Typography>
        
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}