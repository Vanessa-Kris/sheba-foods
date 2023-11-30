import {
  Box,
  Typography,
  Card,
  CardMedia,
  Avatar,
  Grid,
  Rating,
} from "@mui/material";
import React from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import "../App.css";
import {
  FaEnvelope,
  FaFacebook,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa6";

export default function Reviews() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  return (
    <Box
      sx={{
        mt: { md: 7, sm: 10, xs: 2 },
        py: 10,
        px: { md: 10, sm: 7, xs: 2 },
      }}
    >
      <Typography
        variant="h3"
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
          <Box component="img" src="/review1.jpeg" sx={{ width: "100%" }} />
        </li>

        <li className="listitems">
          <Card sx={{ p: 3 }}>
            <Box>
              <Grid container>
                <Grid item md={2} sm={6} xs={2}>
                  <CardMedia>
                    <Avatar src="/ND.jpeg" />
                  </CardMedia>
                </Grid>

                <Grid item md={3} sm={6} xs={3}>
                  <Typography variant="h6" sx={{ ml: 2, mt: { md: 1, xs: 0 } }}>
                    ND
                  </Typography>{" "}
                  <Typography variant="p" sx={{ ml: 0, color: "#707070" }}>
                    General contractor
                  </Typography>
                  {/* <FaWhatsapp /> <FaFacebook /> <FaEnvelope /> */}
                </Grid>
              </Grid>
            </Box>
            <Typography
              variant="h5"
              sx={{
                mt: 3,
                color: "#505050",
                // bgcolor: "#EBF2FA",
                p: 2,
                borderRadius: "10px",
              }}
            >
              This Tom Brown Meal is heavenly. I felt like superman at the gym
              yesterday
            </Typography>
            <Box sx={{ mt: 5 }}></Box>
            <Rating name="read-only" value={4} readOnly />
            <br />
            <FaWhatsapp style={{ marginRight: 8, color: "green" }} />{" "}
            <FaFacebook style={{ marginRight: 8, color: "skyblue" }} />{" "}
            <FaRegEnvelope style={{ marginRight: 8, color: "red" }} />
          </Card>
        </li>
        {/*  */}

        <li className="listitems">
          <Box component="img" src="/review2.jpeg" sx={{ width: "100%" }} />
        </li>

        <li className="listitems">
          <Card sx={{ p: 3 }}>
            <Box>
              <Grid container>
                <Grid item md={2} sm={6} xs={2}>
                  <CardMedia>
                    <Avatar />
                  </CardMedia>
                </Grid>

                <Grid item md={3} sm={6} xs={3}>
                  <Typography variant="h6" sx={{ ml: 2, mt: { md: 1, xs: 0 } }}>
                    Danino
                  </Typography>{" "}
                  <Typography variant="p" sx={{ ml: 2, color: "#707070" }}>
                    Doctor
                  </Typography>
                  {/* <FaWhatsapp /> <FaFacebook /> <FaEnvelope /> */}
                </Grid>
              </Grid>
            </Box>
            <Typography
              variant="h5"
              sx={{
                mt: 3,
                color: "#505050",
                // bgcolor: "#EBF2FA",
                p: 2,
                borderRadius: "10px",
              }}
            >
              I eat it everyday. It's really nice. I like the tase no dislikes
              at all
            </Typography>
            <Box sx={{ mt: 5 }}></Box>
            <Rating name="read-only" value={4} readOnly />
            <br />
            <FaWhatsapp style={{ marginRight: 8, color: "green" }} />{" "}
            <FaFacebook style={{ marginRight: 8, color: "skyblue" }} />{" "}
            <FaRegEnvelope style={{ marginRight: 8, color: "red" }} />
          </Card>
        </li>

        {/*  */}

        <li className="listitems">
          <Box component="img" src="/review3.jpeg" sx={{ width: "100%" }} />
        </li>

        <li className="listitems">
          <Card sx={{ p: 3 }}>
            <Box>
              <Grid container>
                <Grid item md={2} sm={6} xs={2}>
                  <CardMedia>
                    <Avatar />
                  </CardMedia>
                </Grid>

                <Grid item md={3} sm={6} xs={3}>
                  <Typography variant="h6" sx={{ ml: 2, mt: { md: 1, xs: 0 } }}>
                    ND
                  </Typography>{" "}
                  <Typography variant="p" sx={{ ml: 2, color: "#707070" }}>
                    Doctor
                  </Typography>
                  {/* <FaWhatsapp /> <FaFacebook /> <FaEnvelope /> */}
                </Grid>
              </Grid>
            </Box>
            <Typography
              variant="h5"
              sx={{
                mt: 3,
                color: "#505050",
                // bgcolor: "#EBF2FA",
                p: 2,
                borderRadius: "10px",
              }}
            >
              This Tom Brown Meal is heavenly. I felt like superman at the gym
              yesterday
            </Typography>
            <Box sx={{ mt: 5 }}></Box>
            <Rating name="read-only" value={4} readOnly />
            <br />
            <FaWhatsapp style={{ marginRight: 8, color: "green" }} />{" "}
            <FaFacebook style={{ marginRight: 8, color: "skyblue" }} />{" "}
            <FaRegEnvelope style={{ marginRight: 8, color: "red" }} />
          </Card>
        </li>

        {/*  */}

        <li className="listitems">
          <Box component="img" src="/review4.jpeg" sx={{ width: "100%" }} />
        </li>

        <li className="listitems">
          <Card sx={{ p: 3 }}>
            <Box>
              <Grid container>
                <Grid item md={2} sm={6} xs={2}>
                  <CardMedia>
                    <Avatar />
                  </CardMedia>
                </Grid>

                <Grid item md={3} sm={6} xs={3}>
                  <Typography variant="h6" sx={{ ml: 2, mt: { md: 1, xs: 0 } }}>
                    ND
                  </Typography>{" "}
                  <Typography variant="p" sx={{ ml: 2, color: "#707070" }}>
                    Doctor
                  </Typography>
                  {/* <FaWhatsapp /> <FaFacebook /> <FaEnvelope /> */}
                </Grid>
              </Grid>
            </Box>
            <Typography
              variant="h5"
              sx={{
                mt: 3,
                color: "#505050",
                // bgcolor: "#EBF2FA",
                p: 2,
                borderRadius: "10px",
              }}
            >
              This Tom Brown Meal is heavenly. I felt like superman at the gym
              yesterday
            </Typography>
            <Box sx={{ mt: 5 }}></Box>
            <Rating name="read-only" value={4} readOnly />
            <br />
            <FaWhatsapp style={{ marginRight: 8, color: "green" }} />{" "}
            <FaFacebook style={{ marginRight: 8, color: "skyblue" }} />{" "}
            <FaRegEnvelope style={{ marginRight: 8, color: "red" }} />
          </Card>
        </li>

        {/*  */}

        <li className="listitems">
          <Box component="img" src="/review5.jpeg" sx={{ width: "100%" }} />
        </li>

        <li className="listitems">
          <Card sx={{ p: 3 }}>
            <Box>
              <Grid container>
                <Grid item md={2} sm={6} xs={2}>
                  <CardMedia>
                    <Avatar />
                  </CardMedia>
                </Grid>

                <Grid item md={3} sm={6} xs={3}>
                  <Typography variant="h6" sx={{ ml: 2, mt: { md: 1, xs: 0 } }}>
                    ND
                  </Typography>{" "}
                  <Typography variant="p" sx={{ ml: 2, color: "#707070" }}>
                    Doctor
                  </Typography>
                  {/* <FaWhatsapp /> <FaFacebook /> <FaEnvelope /> */}
                </Grid>
              </Grid>
            </Box>
            <Typography
              variant="h5"
              sx={{
                mt: 3,
                color: "#505050",
                // bgcolor: "#EBF2FA",
                p: 2,
                borderRadius: "10px",
              }}
            >
              This Tom Brown Meal is heavenly. I felt like superman at the gym
              yesterday
            </Typography>
            <Box sx={{ mt: 5 }}></Box>
            <Rating name="read-only" value={4} readOnly />
            <br />
            <FaWhatsapp style={{ marginRight: 8, color: "green" }} />{" "}
            <FaFacebook style={{ marginRight: 8, color: "skyblue" }} />{" "}
            <FaRegEnvelope style={{ marginRight: 8, color: "red" }} />
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
          <Card className="card" sx={{ p: 3 }}>
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
