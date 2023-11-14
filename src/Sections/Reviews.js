import { Box, Typography, Card, CardMedia, Avatar } from "@mui/material";
import React from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import "../App.css";

export default function Reviews() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  return (
    <Box
      align="center"
      sx={{
        mt: { md: 7, sm: 10, xs: 2 },
        py: 10,
        px: { md: 10, sm: 7, xs: 2 },
      }}
    >
      <Typography
        variant="h2"
        textAlign="center"
        sx={{
          fontWeight: 700,
          mb: 7,
        }}
      >
        Reviews
      </Typography>
      {/* <Divider
        flexItem
        sx={{ bgcolor: "#d7d0d7", width: { md: "20%", xs: "40%" }, mb: 4 }}
      /> */}

      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress, color: "black" }}
        />
      </svg>

      <ul ref={ref} className="list">
        <li className="listitems">
          <Card sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ pt: 3, color: "#505050" }}>
              " This Tom Brown Meal is heavenly. I felt like superman at the gym
              yesterday "
            </Typography>
            <Box sx={{ mt: 5 }}>
              <CardMedia>
                <Avatar />
              </CardMedia>
              <Typography variant="h6" sx={{ mt: 3 }}>
                ND
              </Typography>
            </Box>
          </Card>
        </li>

        <li className="listitems">
          <Card sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ pt: 3, color: "#505050" }}>
              "This your product really go well, I enjoyed it to the fullest!"
            </Typography>
            <Box sx={{ mt: 5 }}>
              <CardMedia>
                <Avatar />
              </CardMedia>
              <Typography variant="h6" sx={{ mt: 3 }}>
                ThaniBlow
              </Typography>
            </Box>
          </Card>
        </li>

        <li className="listitems">
          <Card sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ pt: 3, color: "#505050" }}>
              "Sheba Foods you be doing the most, mehn! this is so good, so so
              good."
            </Typography>
            <Box sx={{ mt: 5 }}>
              <CardMedia>
                <Avatar />
              </CardMedia>
              <Typography variant="h6" sx={{ mt: 3 }}>
                OG Successful
              </Typography>
            </Box>
          </Card>
        </li>
        <li className="listitems">
          <Card sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ pt: 3, color: "#505050" }}>
              "I eat it everyday. It's really nice. I like the tase no dislikes
              at all"
            </Typography>
            <Box sx={{ mt: 5 }}>
              <CardMedia>
                <Avatar />
              </CardMedia>
              <Typography variant="h6" sx={{ mt: 3 }}>
                Danino
              </Typography>
            </Box>
          </Card>
        </li>
        <li className="listitems">
          <Card sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ pt: 3, color: "#505050" }}>
              "Omo person no believe say na 2k I buy am oo, e goessss. I dey
              make am like pap!"
            </Typography>
            <Box sx={{ mt: 5 }}>
              <CardMedia>
                <Avatar />
              </CardMedia>
              <Typography variant="h6" sx={{ mt: 3 }}>
                OG Successful
              </Typography>
            </Box>
          </Card>
        </li>
        <li className="listitems">
          <Card sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ pt: 3, color: "#505050" }}>
              " Omo as I dey do am all my guys gather we chop am with bread come
              sleep wella!"
            </Typography>
            <Box sx={{ mt: 5 }}>
              <CardMedia>
                <Avatar />
              </CardMedia>
              <Typography variant="h6" sx={{ mt: 3 }}>
                ThaniBlow
              </Typography>
            </Box>
          </Card>
        </li>
        <li className="listitems">
          <Card sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ pt: 3, color: "#505050" }}>
              "I don finish am! I go need like 2 packs again . I wan buy one for
              myself and one for the house"
            </Typography>
            <Box sx={{ mt: 5 }}>
              <CardMedia>
                <Avatar />
              </CardMedia>
              <Typography variant="h6" sx={{ mt: 3 }}>
                Mr Kizz
              </Typography>
            </Box>
          </Card>
        </li>
      </ul>
    </Box>
  );
}
