import React from "react";
import { Box, Typography, Card, Grid } from "@mui/material";

export default function Events() {
  return (
    <Box>
      <Box
        component="img"
        src="/sale.jpg"
        alt=""
        sx={{ width: "100%", pt: { xs: 7 } }}
      />
      <Box sx={{ m: { md: 15, sm: 10, xs: 3 } }}>
        <Typography variant="h3">Upcoming Events</Typography>

        {/*  */}
        <Box sx={{ mt: 10 }}>
          <Grid container columnSpacing={8} rowSpacing={8}>
            <Grid item md={6} sm={6} xs={12}>
              <Card>
                <Box
                  component="img"
                  src="/sale.jpg"
                  alt=""
                  sx={{ width: "100%" }}
                />
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ pb: 2 }}>
                    Christmas Family Sales
                  </Typography>
                  <Typography variant="body2" sx={{ pb: 2, color: "#505050" }}>
                    {" "}
                    30/11/2023 - 10/12/2023
                  </Typography>

                  <Typography variant="body2" sx={{ pb: 2, color: "#505050" }}>
                    Contact: 123 457 891.
                  </Typography>
                  <Typography>
                    Shop all of Sheba foods products for 20% off this festive
                    season.
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <Card>
                <Box
                  component="img"
                  src="/sale.jpg"
                  alt=""
                  sx={{ width: "100%" }}
                />
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ pb: 2 }}>
                    New Year Family Sales
                  </Typography>
                  <Typography variant="body2" sx={{ pb: 2, color: "#505050" }}>
                    {" "}
                    30/12/2023 - 10/1/2024
                  </Typography>

                  <Typography variant="body2" sx={{ pb: 2, color: "#505050" }}>
                    Contact: 123 457 891.
                  </Typography>
                  <Typography>
                    Shop all of Sheba foods products for 20% off this festive
                    season.
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
        {/*  */}

        <Box sx={{ mt: 10 }}>
          <Typography variant="h4" sx={{ pb: 3 }}>
            Live Events
          </Typography>
          <Grid container columnSpacing={8} rowSpacing={8}>
            <Grid item md={6} sm={6} xs={12}>
              <Card>
                <Box
                  component="img"
                  src="/sale.jpg"
                  alt=""
                  sx={{ width: "100%" }}
                />
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ pb: 2 }}>
                    Sheba Foods Trade Fair 2024
                  </Typography>
                  <Typography variant="body2" sx={{ pb: 2, color: "#505050" }}>
                    {" "}
                    April 20th 2024
                  </Typography>

                  <Typography variant="body2" sx={{ pb: 2, color: "#505050" }}>
                    Contact: 123 457 891.
                  </Typography>
                  <Typography>Venue: Yet to be decided</Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
        {/*  */}
      </Box>
    </Box>
  );
}
