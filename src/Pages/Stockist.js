import React from "react";
import { Box, Typography, Card } from "@mui/material";

export default function Stockist() {
  return (
    <Box>
      <Box
        component="img"
        src="/supermart.jpg"
        alt=""
        sx={{ width: "100%", pt: { xs: 7 } }}
      />
      <Box sx={{ m: { md: 15, sm: 10, xs: 3 } }}>
        <Typography variant="h6">
          Find Stores and retailers of Sheba Meals near you.
        </Typography>

        <Box sx={{ mt: 10 }}>
          <Typography
            variant="h5"
            sx={{ fontSize: "27px", fontWeight: 400, m: 1 }}
          >
            Nigeria
          </Typography>
          <Card variant="outlined" sx={{ p: 3 }}>
            <Typography variant="h6">Port Harcourt</Typography>
            <Typography sx={{ color: "#505050" }}>
              It is well Supermarket
            </Typography>
            <Typography sx={{ color: "#505050" }}>
              Address: Opposite Akpor grammar School, Ozuoba, Port Harcourt .
            </Typography>
            <Typography sx={{ color: "#505050" }}>
              Contact: +2347011677311.
            </Typography>
          </Card>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Card variant="outlined" sx={{ p: 3 }}>
            <Typography variant="h6">Port Harcourt</Typography>
            <Typography sx={{ color: "#505050" }}>Blessed</Typography>
            <Typography sx={{ color: "#505050" }}>
              Address: Uniport, Port Harcourt.
            </Typography>
            <Typography sx={{ color: "#505050" }}>
              Contact: +2348065070960.
            </Typography>
          </Card>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Card variant="outlined" sx={{ p: 3 }}>
            <Typography variant="h6">Port Harcourt</Typography>
            <Typography sx={{ color: "#505050" }}>Michelle</Typography>
            <Typography sx={{ color: "#505050" }}>
              Address: UST, Port Harcourt.
            </Typography>
            <Typography sx={{ color: "#505050" }}>
              Contact: +2349095216346.
            </Typography>
          </Card>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Card variant="outlined" sx={{ p: 3 }}>
            <Typography variant="h6">Port Harcourt</Typography>
            <Typography sx={{ color: "#505050" }}>Victor</Typography>
            <Typography sx={{ color: "#505050" }}>
              Address: Iwofe, Port Harcourt.
            </Typography>
            <Typography sx={{ color: "#505050" }}>
              Contact: +2349079824056.
            </Typography>
          </Card>
        </Box>

        {/* <Box sx={{ mt: 10 }}>
          <Typography
            variant="h5"
            sx={{ fontSize: "27px", fontWeight: 400, m: 1 }}
          >
            Enugu Nigeria
          </Typography>
          <Card variant="outlined" sx={{ p: 3 }}>
            <Typography variant="h6">Port Harcourt</Typography>
            <Typography sx={{ color: "#505050" }}>New Supermarket</Typography>
            <Typography sx={{ color: "#505050" }}>
              Adress: N0 15 some street, Port Harcourt.
            </Typography>
            <Typography sx={{ color: "#505050" }}>
              Contact: 123 457 891.
            </Typography>
          </Card>
        </Box> */}

        <Box sx={{ mt: 10 }}>
          <Typography
            variant="h5"
            sx={{ fontSize: "27px", fontWeight: 400, m: 1 }}
          >
            Cameroon
          </Typography>
          <Card variant="outlined" sx={{ p: 3 }}>
            <Typography variant="h6">Bamenda</Typography>
            <Typography sx={{ color: "#505050" }}>Vanessa</Typography>
            <Typography sx={{ color: "#505050" }}>
              Adress: Sonac Street, Bamenda, Cameroon.
            </Typography>
            <Typography sx={{ color: "#505050" }}>
              Contact: +237653072308.
            </Typography>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
