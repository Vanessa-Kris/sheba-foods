import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useGoogleForm, GoogleFormProvider } from "react-google-forms-hooks";
// import { LongAnswerInput, ShortAnswerInput } from "../Products/WholeMeal";
import { LongAnswerInput, ShortAnswerInput } from "./Reviews";
import form from "../Scripts/contact_form.json";
import Helmet from "react-helmet";

export default function Contact() {
  const handleReviewSubmit = async (data) => {
    await methods.submitToGoogleForms(data);
    methods.reset(); // Clear the form fields
    alert("Thank you for your review");
  };

  const methods = useGoogleForm({ form });
  const onSubmit = async (data) => {
    await methods.submitToGoogleForms(data);
  };
  return (
    <Box mx="auto" justifyContent="center">
      <Grid
        container
        columnSpacing={4}
        sx={{ bgcolor: "#FDE74C", py: { md: 0, xs: 7 } }}
      >
        <Grid item md={6} sm={6} xs={12}>
          <Box component="img" src="/tea.jpeg" sx={{ width: "100%" }} />
        </Grid>
        <Grid item md={6} sm={6} xs={12} my="auto">
          <Typography
            variant="h6"
            sx={{ pb: 2, px: { md: 0, xs: 3 }, pr: { md: 7, xs: 0 } }}
          >
            Interested in collaborating with us? Whether you have feedback or
            complaints, we welcome your input and would love to hear from you!
          </Typography>
          <GoogleFormProvider {...methods}>
            <Box
              sx={{ px: { md: 0, xs: 3 } }}
              component="form"
              onSubmit={methods.handleSubmit(handleReviewSubmit)}
            >
              <ShortAnswerInput
                id="1286537877"
                style={{ width: "100% !important" }}
              />
              <LongAnswerInput id="433958561" /> <br />
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Box>
          </GoogleFormProvider>
        </Grid>
      </Grid>

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
              Protein-rich Tombrown cake A healthy alternative to regular flour
              cake. Switch to the healthier option today.{" "}
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

      <Box sx={{ py: 5 }}>
        <Grid container columnSpacing={3}>
          <Grid item md={3} sm={3} xs={12}>
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
          </Grid>

          <Grid item md={3} sm={3} xs={12}>
            <blockquote
              class="tiktok-embed"
              cite="https://www.tiktok.com/@shebameals/video/7320286328220847366"
              data-video-id="7320286328220847366"
              style={{ maxWidth: "100%", minWidth: "100%" }}
            >
              {" "}
              <section>
                {" "}
                <a
                  target="_blank"
                  title="@shebameals"
                  rel="noreferrer"
                  href="https://www.tiktok.com/@shebameals?refer=embed"
                >
                  @shebameals
                </a>{" "}
                yummy Tombrown wholemeal featuring fried plantain &#38; egg.
                Would you try this recipe?{" "}
                <a
                  title="capcut"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/capcut?refer=embed"
                >
                  #CapCut
                </a>{" "}
                <a
                  title="shebameals"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/shebameals?refer=embed"
                >
                  #shebameals
                </a>{" "}
                <a
                  title="tombrown"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/tombrown?refer=embed"
                >
                  #tombrown
                </a>{" "}
                <a
                  title="shebafoods"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/shebafoods?refer=embed"
                >
                  #shebafoods
                </a>{" "}
                <a
                  title="healthyfood"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/healthyfood?refer=embed"
                >
                  #healthyfood
                </a>{" "}
                <a
                  title="nigerianbabyfood"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/nigerianbabyfood?refer=embed"
                >
                  #nigerianbabyfood
                </a>{" "}
                <a
                  title="natural"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/natural?refer=embed"
                >
                  #natural
                </a>{" "}
                <a
                  title="fyp"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/fyp?refer=embed"
                >
                  #fyp
                </a>{" "}
                <a
                  title="sarz"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/sarz?refer=embed"
                >
                  #sarz
                </a>{" "}
                <a
                  title="asake"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/asake?refer=embed"
                >
                  #asake
                </a>{" "}
                <a
                  title="gunna"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/gunna?refer=embed"
                >
                  #gunna
                </a>{" "}
                <a
                  title="happiness"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/happiness?refer=embed"
                >
                  #happiness
                </a>{" "}
                <a
                  title="proteinpowder"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/proteinpowder?refer=embed"
                >
                  #proteinpowder
                </a>{" "}
                <a
                  title="bodystationgym"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/bodystationgym?refer=embed"
                >
                  #bodystationgym
                </a>{" "}
                <a
                  title="gym"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/gym?refer=embed"
                >
                  #gym
                </a>{" "}
                <a
                  title="fitness"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/fitness?refer=embed"
                >
                  #fitness
                </a>{" "}
                <a
                  title="cooking"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/cooking?refer=embed"
                >
                  #cooking
                </a>{" "}
                <a
                  title="gymfoodidea"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/gymfoodidea?refer=embed"
                >
                  #gymfoodidea
                </a>
                @Sheba Meals{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  title="♬ original sound - Sheba Meals"
                  href="https://www.tiktok.com/music/original-sound-7320286333602237189?refer=embed"
                >
                  ♬ original sound - Sheba Meals
                </a>{" "}
              </section>{" "}
            </blockquote>{" "}
            <script async src="https://www.tiktok.com/embed.js"></script>
          </Grid>
          <Grid item md={3} sm={3} xs={12}>
            <blockquote
              class="tiktok-embed"
              cite="https://www.tiktok.com/@shebameals/video/7323982073440554246"
              data-video-id="7323982073440554246"
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
                Tombrown can be used for Tea, Porridge (custard), SWALLOW, CAKE,
                PANCAKE, PROTEINSHAKE{" "}
                <a
                  title="sheba"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/sheba?refer=embed"
                >
                  #sheba
                </a>{" "}
                <a
                  title="shebafoods"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/shebafoods?refer=embed"
                >
                  #shebafoods
                </a>{" "}
                <a
                  title="shebameals"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/shebameals?refer=embed"
                >
                  #shebameals
                </a>{" "}
                <a
                  title="tombrown"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/tombrown?refer=embed"
                >
                  #Tombrown
                </a>{" "}
                <a
                  title="foodsupplement"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/foodsupplement?refer=embed"
                >
                  #foodsupplement
                </a>{" "}
                <a
                  title="musclegainrecipe"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/musclegainrecipe?refer=embed"
                >
                  #musclegainrecipe
                </a>{" "}
                <a
                  title="weightloss"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/weightloss?refer=embed"
                >
                  #weightloss
                </a>{" "}
                <a
                  title="plantbasedprotein"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/plantbasedprotein?refer=embed"
                >
                  #plantbasedprotein
                </a>{" "}
                <a
                  title="portharcourttiktoker"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/portharcourttiktoker?refer=embed"
                >
                  #portharcourttiktoker
                </a>{" "}
                @Sheba Meals{" "}
                <a
                  title="nigeriantiktok🇳🇬"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/nigeriantiktok%F0%9F%87%B3%F0%9F%87%AC?refer=embed"
                >
                  #nigeriantiktok🇳🇬
                </a>{" "}
                <a
                  title="capcut"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/capcut?refer=embed"
                >
                  #CapCut
                </a>{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  title="♬ original sound - Sheba Meals"
                  href="https://www.tiktok.com/music/original-sound-7323982074671827717?refer=embed"
                >
                  ♬ original sound - Sheba Meals
                </a>{" "}
              </section>{" "}
            </blockquote>{" "}
            <script async src="https://www.tiktok.com/embed.js"></script>
          </Grid>
          <Grid item md={3} sm={3} xs={12}>
            <blockquote
              class="tiktok-embed"
              cite="https://www.tiktok.com/@shebameals/video/7312904591685815558"
              data-video-id="7312904591685815558"
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
                hygenically prepared Tombrown wholemeal, 100% Natural and
                enriched with essential Vitamins and Minerals for the whole
                family.{" "}
                <a
                  title="tombrown"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/tombrown?refer=embed"
                >
                  #tombrown
                </a>{" "}
                <a
                  title="shebameals"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/tag/shebameals?refer=embed"
                >
                  #Shebameals
                </a>{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  title="♬ Future - Official Sound Studio"
                  href="https://www.tiktok.com/music/Future-6693354155173481218?refer=embed"
                >
                  ♬ Future - Official Sound Studio
                </a>{" "}
              </section>{" "}
            </blockquote>{" "}
            <script async src="https://www.tiktok.com/embed.js"></script>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
