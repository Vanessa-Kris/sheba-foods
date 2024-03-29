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
                    Family Sales
                  </Typography>
                  <Typography variant="body2" sx={{ pb: 2, color: "#505050" }}>
                    {" "}
                    Date to be decided
                  </Typography>

                  <Typography variant="body2" sx={{ pb: 2, color: "#505050" }}>
                    Contact: +234 808 443 4959.
                  </Typography>
                  <Typography>
                    Shop all of Sheba foods products for 20% off.
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
        {/*  */}

        {/*  */}
      </Box>
    </Box>
  );
}
