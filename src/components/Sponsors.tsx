import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Sponsors() {
  return (
    <div>
    <Typography align="center">
    <h1>Sponsors</h1>
    <h3>Thank you to the following organizations that have sponsored this year's tournament; it would not be possible without their support. To learn more about their organization's work, simply click on their logo!</h3>
    </Typography>
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {sponsorData.map((sponsor) => (
            <Grid key={sponsor.img}>
              <a href={sponsor.link} target="_blank">
                <img src={sponsor.img} height="200" />
              </a>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
    </div>
  );
}

const sponsorData = [
  {
    img: "http://nlrugby.ca/wp-content/uploads/2019/07/NL-Brand-Logo-Colour-RGB2-e1564325351809.jpg",
    title: "GovNL",
    link: "https://www.gov.nl.ca/",
  },
  {
    img: "http://nlrugby.ca/wp-content/uploads/2022/07/City_of_St._Johns_corporate_logo.png",
    title: "CSJ",
    link: "https://stjohns.ca/",
  },
  {
    img: "http://nlrugby.ca/wp-content/uploads/2019/07/marco.png",
    title: "Marco",
    link: "https://marcogroup.ca/",
  },
  {
    img: "https://media-exp1.licdn.com/dms/image/C4E0BAQH07wZiEm75CQ/company-logo_200_200/0/1636035187174?e=2147483647&v=beta&t=UYX8t_TXB-gq_SD6EwYwxqX9RxIKguc9DgBSfaWrAp8",
    title: "Pinnacle",
    link: "https://www.pinnacleoffice.ca/",
  },
  {
    img: "http://nlrugby.ca/wp-content/uploads/2022/07/Gilbert_sports_equipment_logo.svg_.png",
    title: "Gilbert",
    link: "https://gilbertrugbycanada.com/",
  },
];
