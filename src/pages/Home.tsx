import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Schedule from "../components/Schedule";
import Livestream from "../components/Livestream";
import Standings from "../components/Standings";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      {new Date().getFullYear()}
      {" Newfoundland and Labrador Rugby Union. All Rights Reserved."}
    </Typography>
  );
}

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

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 2,
          }}
        >
          <Container>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              2022 Junior Atlantic Rugby Championship
            </Typography>
            <Typography
              variant="h4"
              align="center"
              color="text.secondary"
              paragraph
            >
              July 7th - 10th 2022
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Swilers Rugby Football Complex (100 Crosbie Road, St. John's, NL,
              A1B 3W4)
            </Typography>
            <Schedule />
            <Standings />
            <Livestream />
          </Container>
        </Box>
      </main>
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}
