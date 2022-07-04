import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

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

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(152, 3, 3, 0.8)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Typography align="center">
        <h1>Fixtures & Results</h1>
      </Typography>
      <Accordion onChange={handleChange("panel1")}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Friday</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTKHdIpINXrn1E2kA_sd4ICSAA6Krn-tTfkyLxspmC2wH-57ZzHPpWAz1LakSpuKXNmC29A7R_8f-fn/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
            width="100%"
            height="800px"
          ></iframe>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Saturday</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTKHdIpINXrn1E2kA_sd4ICSAA6Krn-tTfkyLxspmC2wH-57ZzHPpWAz1LakSpuKXNmC29A7R_8f-fn/pubhtml?gid=280756507&amp;single=true&amp;widget=true&amp;headers=false"
            width="100%"
            height="800px"
          ></iframe>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Sunday</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTKHdIpINXrn1E2kA_sd4ICSAA6Krn-tTfkyLxspmC2wH-57ZzHPpWAz1LakSpuKXNmC29A7R_8f-fn/pubhtml?gid=2077298612&amp;single=true&amp;widget=true&amp;headers=false"
            width="100%"
            height="600px"
          ></iframe>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default function Schedule() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container>
            <CustomizedAccordions />
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
