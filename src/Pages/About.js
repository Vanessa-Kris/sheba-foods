import {
  Box,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function About() {
  return (
    <>
      <Box
        sx={{
          mt: { md: 7, sm: 5, xs: 5 },
          py: 10,
          px: { md: 10, sm: 7, xs: 2 },
        }}
      >
        <Box
          align="center"
          sx={{
            mx: { md: 15, sm: 10, xs: 5 },
          }}
        >
          <Typography
            variant="h2"
            textAlign="center"
            sx={{
              fontWeight: 700,
              mb: 5,
            }}
          >
            About{" "}
            <span
              style={{
                color: "#268703",
                fontFamily: "monospace",
              }}
            >
              Us
            </span>
          </Typography>
          <Typography
            align="center"
            variant="p"
            textAlign="center"
            sx={{ color: "#505050" }}
          >
            Sheba Meals, established in 2023, is dedicated to delivering
            high-quality and nutritious food suitable for all age groups. Our
            mission is to ensure that our recipes not only tantalize your taste
            buds but also encompass all the essential nutrients required for a
            vibrant and healthy lifestyle.
          </Typography>
          <br />
        </Box>
        <Grid container rowSpacing={7} columnSpacing={5} sx={{ mt: 5 }}>
          <Grid item md={6} sm={6} xs={12}>
            <Box
              component="img"
              src="https://img.freepik.com/free-photo/close-up-hands-holding-plants_23-2149142897.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph"
              alt=""
              sx={{ width: "100%", borderRadius: "30px" }}
            />
          </Grid>
          <Grid
            item
            md={6}
            sm={6}
            xs={12}
            justifyContent="center"
            alignItems="center"
            my="auto"
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 5,
              }}
            >
              Our{" "}
              <span
                style={{
                  color: "#268703",
                  fontFamily: "monospace",
                }}
              >
                Vision
              </span>
            </Typography>

            <Typography variant="p" sx={{ color: "#505050" }}>
              Explore the comprehensive nutritional profile and myriad health
              advantages associated with this wholesome wholemeal.
            </Typography>
            <br />
            <Typography variant="p" sx={{ color: "#505050" }}>
              Explore the comprehensive nutritional profile and myriad health
              advantages associated with this wholesome wholemeal.
            </Typography>
          </Grid>
          {/*  */}

          <Grid
            item
            md={6}
            sm={6}
            xs={12}
            justifyContent="center"
            alignItems="center"
            my="auto"
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 5,
              }}
            >
              Our{" "}
              <span
                style={{
                  color: "#268703",
                  fontFamily: "monospace",
                }}
              >
                Mission
              </span>
            </Typography>

            <Typography variant="p" sx={{ color: "#505050" }}>
              Explore the comprehensive nutritional profile and myriad health
              advantages associated with this wholesome wholemeal.
            </Typography>
            <br />
            <Typography variant="p" sx={{ color: "#505050" }}>
              Explore the comprehensive nutritional profile and myriad health
              advantages associated with this wholesome wholemeal.
            </Typography>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Box
              component="img"
              src="https://img.freepik.com/free-photo/parents-kids-spending-time-together_23-2149489588.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=ais"
              alt=""
              sx={{ width: "100%", borderRadius: "30px" }}
            />
          </Grid>
        </Grid>
        {/*  */}
      </Box>
      <Box
        align="center"
        sx={{ mt: { md: 4, sm: 4, xs: 4 }, bgcolor: "#FFFFCC", py: 10 }}
      >
        <Box
          id="our-impact"
          align="center"
          sx={{
            mx: { md: 15, sm: 10, xs: 5 },
          }}
        >
          <Typography
            variant="h2"
            textAlign="center"
            sx={{
              fontWeight: 700,
              mb: 5,
            }}
          >
            Our{" "}
            <span
              style={{
                color: "#268703",
                fontFamily: "monospace",
              }}
            >
              Impact
            </span>
          </Typography>
          <Typography
            align="center"
            variant="p"
            textAlign="center"
            sx={{ color: "#505050" }}
          >
            At Sheba Meals, we believe in cultivating more than just fantastic
            flavors - we're sowing the seeds for a greener, healthier planet.
            Our blended grains and nuts powders aren't just a culinary delight;
            they're a commitment to environmental well-being.
          </Typography>{" "}
          <Typography
            align="center"
            variant="p"
            textAlign="center"
            sx={{ color: "#505050" }}
          >
            Step into a world where your health journey intertwines with the
            planet's well-being.
          </Typography>
          <br />
          <Typography
            align="center"
            variant="p"
            textAlign="center"
            sx={{ color: "#505050" }}
          >
            We despise waste as much as you do. That's why our blends are
            crafted to utilize every part of the ingredients, leaving no room
            for unnecessary waste.
          </Typography>
          <br />
          <Typography
            align="center"
            variant="p"
            textAlign="center"
            sx={{ color: "#505050" }}
          >
            Every spoonful from Sheba Meals is a vote for the environment. We
            invite you to savor the goodness of our blends and join us in making
            choices that matter. Our products aren't just about nourishing your
            body; they're about nurturing the Earth we all call home. Moving
            towards a world where conscious consumption is the norm.
          </Typography>
          <br />
          <Typography
            align="center"
            variant="p"
            textAlign="center"
            sx={{ color: "#505050" }}
          >
            Welcome to Sheba Meals – Where Every Blend Tells a Green Tale!
          </Typography>
          <br />
        </Box>
      </Box>
      {/*  */}

      <Box>
        <Box
          component="img"
          src="/grain.jpg"
          sx={{ width: "100%", height: "70% !important" }}
        />
      </Box>

      {/*  */}
      <Box
        id="green-environment"
        sx={{
          mt: { md: 7, sm: 5, xs: 5 },
          py: 10,
          px: { md: 10, sm: 7, xs: 2 },
        }}
      >
        <Typography
          variant="h2"
          textAlign="center"
          sx={{
            fontWeight: 700,
            mb: 5,
          }}
        >
          <span
            style={{
              color: "#268703",
              fontFamily: "monospace",
            }}
          >
            Green
          </span>{" "}
          Environment
        </Typography>
        <Grid container rowSpacing={7} columnSpacing={5} sx={{ mt: 5 }}>
          <Grid item md={6} sm={6} xs={12}>
            <Box
              component="img"
              src="https://img.freepik.com/free-photo/organic-plants-farming-concept_23-2148573872.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=ais"
              alt=""
              sx={{ width: "100%", borderRadius: "30px" }}
            />
          </Grid>
          <Grid
            item
            md={6}
            sm={6}
            xs={12}
            justifyContent="center"
            alignItems="center"
            my="auto"
          >
            <Typography variant="p" sx={{ color: "#505050" }}>
              Step into a world where your health journey intertwines with the
              planet's well-being. Our blended grains and nuts powders are
              carefully curated, ensuring every nutrient-packed bite is a step
              towards a healthier you and a happier Earth.
            </Typography>
            <br />
            <Typography variant="p" sx={{ color: "#505050" }}>
              We're not just blending flavors; we're blending sustainability
              into every pouch.
            </Typography>
          </Grid>
          {/*  */}
        </Grid>
      </Box>

      <Box
        id="local-farming"
        align="center"
        sx={{ mt: { md: 4, sm: 4, xs: 4 }, bgcolor: "#FFFFCC", py: 10 }}
      >
        <Box
          align="center"
          sx={{
            mt: { md: 7, sm: 5, xs: 5 },
            my: 10,
            mx: { md: 10, sm: 7, xs: 2 },
          }}
        >
          <Typography
            variant="h2"
            textAlign="center"
            sx={{
              fontWeight: 700,
              mb: 5,
            }}
          >
            Local{" "}
            <span
              style={{
                color: "#268703",
                fontFamily: "monospace",
              }}
            >
              Farming
            </span>
          </Typography>
          <Typography
            align="center"
            variant="p"
            textAlign="center"
            sx={{ color: "#505050" }}
          >
            Harvested with Heart: Support local farmers and celebrate
            biodiversity with us. Sheba Meals is dedicated to sourcing
            ingredients responsibly. By prioritizing ethical and sustainable
            practices, we create a positive impact on communities and
            ecosystems. Your choice for wellness extends its roots deep into the
            heart of our shared planet.
          </Typography>
          <Typography
            align="center"
            variant="p"
            textAlign="center"
            sx={{ color: "#505050", pt: 3 }}
          >
            We prioritize direct relationships with local farmers, ensuring fair
            compensation for their hard work. By establishing direct sourcing
            channels, we eliminate unnecessary intermediaries, allowing farmers
            to receive a more significant portion of the profits.
          </Typography>
          <br />
          <Typography
            align="center"
            variant="p"
            textAlign="center"
            sx={{ color: "#505050" }}
          >
            We believe in building long-term partnerships with local farmers.
            Stability in our relationships means stability for the farmers,
            providing them with a reliable market for their produce. We view
            local farmers as integral members of our community.
          </Typography>
        </Box>
      </Box>

      <Box>
        <Grid container columnSpacing={4}>
          <Grid item md={6} sm={6} xs={12}>
            <Box
              component="img"
              src="https://img.freepik.com/free-photo/medium-shot-smiley-farmer-cornfield_23-2149142834.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Box
              component="img"
              src="https://img.freepik.com/free-photo/selective-focus-shot-green-plant-field_181624-21437.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=ais"
              sx={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box
        id="faqs"
        sx={{
          mx: { md: 15, sm: 10, xs: 5 },
          my: { md: 15, sm: 10, xs: 5 },
        }}
      >
        <Typography
          variant="h3"
          textAlign="center"
          sx={{
            fontWeight: 700,
            my: 5,
          }}
        >
          Frequently Asked Questions
        </Typography>

        {/* FAQ 1 */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="p" sx={{ color: "#268703", fontWeight: 600 }}>
              What is Sheba Meals?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="p" sx={{ color: "#505050" }}>
              Sheba Meals is dedicated to delivering high-quality and nutritious
              food suitable for all age groups. Our mission is to ensure that
              our recipes not only tantalize your taste buds but also encompass
              all the essential nutrients required for a vibrant and healthy
              lifestyle.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* FAQ 2 */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="p" sx={{ color: "#268703", fontWeight: 600 }}>
              What are the health benefits of Tom Brown Whole Meal?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="p" sx={{ color: "#505050" }}>
              Explore the comprehensive nutritional profile and myriad health
              advantages associated with our wholesome wholemeal{" "}
              <a href="/health-book">here</a>.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* FAQ 3 */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="p" sx={{ color: "#268703", fontWeight: 600 }}>
              How much is Tom Brown Whole Meal 500g
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="p" sx={{ color: "#505050" }}>
              NGN 2000 <a href="/products/tom-brown-whole-meal">buy now</a>.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
}
