import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import ImageWithLoader from "../Components/ImageWithLoader";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Card,
  Grid,
} from "@mui/material";

export default function Puddingrecipe() {
  return (
    <Box>
      <Box
        component="img"
        src="/pud1.jpg"
        alt=""
        sx={{ width: "100%", pt: { xs: 7 } }}
      />
      <Box sx={{ m: { md: 15, sm: 10, xs: 3 } }}>
        <Typography variant="h6">Pudding recipe</Typography>
        <Typography variant="h6" sx={{ py: 5 }}>
          For those looking for a quick and convenient way to enjoy Tom Brown’s
          nutritional benefits
        </Typography>

        <List>
          <ListItem>
            <ListItemText>
              1. Begin by heating up water in a pan until it reaches a gentle
              boil.
            </ListItemText>
          </ListItem>
          <ListItem>
            <Box
              component="img"
              src="/pud1.jpg"
              sx={{ width: { md: "40%", xs: "80%" } }}
            />
          </ListItem>
          {/*  */}
          <ListItem>
            <ListItemText>
              2. n a bowl, combine your desired amount of Tom Brown whole meal
              with cold water. Mixing it in cold water first will help prevent
              the formation of lumps during the cooking process.
            </ListItemText>
          </ListItem>
          <ListItem>
            <Box
              component="img"
              src="/pud1.jpg"
              sx={{ width: { md: "40%", xs: "80%" } }}
            />
          </ListItem>
          {/*  */}
          <ListItem>
            <ListItemText>
              3. Once the water is bubbling, add the Tom Brown whole meal mix.
              Stir continuously to prevent lumps.
            </ListItemText>
          </ListItem>
          <ListItem>
            <Box
              component="img"
              src="/pud1.jpg"
              sx={{ width: { md: "40%", xs: "80%" } }}
            />
          </ListItem>
          {/*  */}
          <ListItem>
            <ListItemText>
              4. Adjust the texture by adding more water until you achieve your
              preferred thickness.
            </ListItemText>
          </ListItem>
          <ListItem>
            <Box
              component="img"
              src="/pud1.jpg"
              sx={{ width: { md: "40%", xs: "80%" } }}
            />
          </ListItem>
          {/*  */}
          <ListItem>
            <ListItemText>
              5. Serve your Tom Brown porridge hot and customize it with milk,
              sugar, honey, or any toppings of your choice.
            </ListItemText>
          </ListItem>
          <ListItem>
            <Box
              component="img"
              src="/pud1.jpg"
              sx={{ width: { md: "40%", xs: "80%" } }}
            />
          </ListItem>
        </List>

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
