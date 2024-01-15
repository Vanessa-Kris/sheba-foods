import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import ImageWithLoader from "../Components/ImageWithLoader";
import { Box, Typography, Card, Grid } from "@mui/material";
import Helmet from "react-helmet";

export default function Pierecipe() {
  return (
    <Box>
      <Box
        component="img"
        src="/pie.jpeg"
        alt=""
        sx={{ width: "100%", pt: { xs: 7 } }}
      />
      <Box sx={{ m: { md: 15, sm: 10, xs: 3 } }}>
        <Typography variant="h6">Tom Brown Cake Recipe recipe</Typography>
        <Typography variant="h6" sx={{ py: 5 }}>
          This cake recipe incorporates Tom Brown whole meal flour, providing a
          healthier alternative to conventional flour.
        </Typography>

        <Box>
          <Helmet>
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@shebameals/video/7323566755958377734"
              data-video-id="7323566755958377734"
              style={{ maxWidth: "605px", minWidth: "325px" }}
            >
              {" "}
              <section>
                {" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  title="@shebameals"
                  href="https://www.tiktok.com/@shebameals?refer=embed"
                >
                  @shebameals
                </a>{" "}
                Protein-rich Tombrown cake A healthy alternative to regular
                flour cake. Switch to the healthier option today.{" "}
                <a
                  title="tombtown"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/tombtown?refer=embed"
                >
                  #tombtown
                </a>{" "}
                <a
                  title="proteinrecipe"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/proteinrecipe?refer=embed"
                >
                  #proteinrecipe
                </a>{" "}
                <a
                  title="cakerecipe"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/cakerecipe?refer=embed"
                >
                  #cakerecipe
                </a>{" "}
                <a
                  title="wholemeal"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/wholemeal?refer=embed"
                >
                  #wholemeal
                </a>{" "}
                <a
                  title="gymfood"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/gymfood?refer=embed"
                >
                  #gymfood
                </a>{" "}
                <a
                  title="babyfood"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/babyfood?refer=embed"
                >
                  #babyfood
                </a>{" "}
                <a
                  title="foodtok"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/foodtok?refer=embed"
                >
                  #foodtok
                </a>{" "}
                <a
                  title="cookingtiktok"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/cookingtiktok?refer=embed"
                >
                  #cookingtiktok
                </a>{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  title="♬ Twe Twe - Kizz Daniel"
                  href="https://www.tiktok.com/music/Twe-Twe-7310120418043218694?refer=embed"
                >
                  ♬ Twe Twe - Kizz Daniel
                </a>{" "}
              </section>{" "}
            </blockquote>{" "}
            <script async src="https://www.tiktok.com/embed.js"></script>
          </Helmet>
        </Box>

        <Grid container>
          <Grid item md={6} sm={6} xs={12}>
            <Typography variant="h6">Ingredients :</Typography>
            <ul>
              <li>Tom Brown Whole Meal powder</li>
              <br />
              <li>Butter</li>
              <br />
              <li>Sugar</li>
              <br />
              <li>Salt</li>
              <br />
              <li>Water</li>
              <br />
              <li>Milk</li>
            </ul>
            <Typography variant="body2">
              See full preparation video in video
            </Typography>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Box item md={3} sm={3} xs={12}>
              <blockquote
                className="tiktok-embed"
                cite="https://www.tiktok.com/@shebameals/video/7323566755958377734"
                data-video-id="7323566755958377734"
                style={{ maxWidth: "100%", minWidth: "100%" }}
              >
                {" "}
                <section>
                  {" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    title="@shebameals"
                    href="https://www.tiktok.com/@shebameals?refer=embed"
                  >
                    @shebameals
                  </a>{" "}
                  Protein-rich Tombrown cake A healthy alternative to regular
                  flour cake. Switch to the healthier option today.{" "}
                  <a
                    title="tombtown"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.tiktok.com/tag/tombtown?refer=embed"
                  >
                    #tombtown
                  </a>{" "}
                  <a
                    title="proteinrecipe"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.tiktok.com/tag/proteinrecipe?refer=embed"
                  >
                    #proteinrecipe
                  </a>{" "}
                  <a
                    title="cakerecipe"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.tiktok.com/tag/cakerecipe?refer=embed"
                  >
                    #cakerecipe
                  </a>{" "}
                  <a
                    title="wholemeal"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.tiktok.com/tag/wholemeal?refer=embed"
                  >
                    #wholemeal
                  </a>{" "}
                  <a
                    title="gymfood"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.tiktok.com/tag/gymfood?refer=embed"
                  >
                    #gymfood
                  </a>{" "}
                  <a
                    title="babyfood"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.tiktok.com/tag/babyfood?refer=embed"
                  >
                    #babyfood
                  </a>{" "}
                  <a
                    title="foodtok"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.tiktok.com/tag/foodtok?refer=embed"
                  >
                    #foodtok
                  </a>{" "}
                  <a
                    title="cookingtiktok"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.tiktok.com/tag/cookingtiktok?refer=embed"
                  >
                    #cookingtiktok
                  </a>{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    title="♬ Twe Twe - Kizz Daniel"
                    href="https://www.tiktok.com/music/Twe-Twe-7310120418043218694?refer=embed"
                  >
                    ♬ Twe Twe - Kizz Daniel
                  </a>{" "}
                </section>{" "}
              </blockquote>{" "}
              <script async src="https://www.tiktok.com/embed.js"></script>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 10 }}>
          <Typography variant="h5" sx={{ my: 4 }}>
            Check out other Tom Brown Whole Meal recipies:
          </Typography>
          <Grid container columnSpacing={2} rowSpacing={2}>
            <Grid item md={4} sm={4} xs={6}>
              <Card>
                <ImageWithLoader
                  src="/pancake.jpg"
                  alt=""
                  sx={{ width: "100%" }}
                />
                <Box sx={{ p: 3 }}>
                  <Typography
                    component="a"
                    href="/recipies/pancake-recipe"
                    variant="subtitle1"
                  >
                    Tom Brown Whole Meal Fluffy Pancakes Recipe <FaArrowRight />
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item md={4} sm={4} xs={6}>
              <Card>
                <ImageWithLoader src="/tea.jpg" alt="" sx={{ width: "100%" }} />
                <Box sx={{ p: 3 }}>
                  <Typography
                    component="a"
                    href="/recipies/tea-recipe"
                    variant="subtitle1"
                  >
                    Tom Brown Whole Meal Tea Recipe <FaArrowRight />
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item md={4} sm={4} xs={6}>
              <Card>
                <ImageWithLoader
                  src="/swallow1.jpeg"
                  alt=""
                  sx={{ width: "40% " }}
                />
                <Box sx={{ p: 3 }}>
                  <Typography
                    component="a"
                    href="/recipies/swallow-recipe"
                    variant="subtitle1"
                  >
                    Tom Brown Whole Meal Swallow Recipe <FaArrowRight />
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
