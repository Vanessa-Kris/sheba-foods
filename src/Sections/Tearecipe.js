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

export default function Tearecipe() {
  return (
    <Box>
      <Box
        component="img"
        src="/tea.jpg"
        alt=""
        sx={{ width: "100%", pt: { xs: 7 } }}
      />
      <Box sx={{ m: { md: 15, sm: 10, xs: 3 } }}>
        <Typography variant="h5">Tom Brown Tea recipe</Typography>
        <Typography variant="h6" sx={{ py: 5 }}>
          For those looking for a quick and convenient way to enjoy Tom Brown’s
          nutritional benefits
        </Typography>
        <Typography variant="p">To get started:</Typography>
        <List>
          <ListItem>
            <ListItemText>
              1. Boil a cup of water to make a piping hot base for your Tom
              Brown Tea.
            </ListItemText>
          </ListItem>
          <ListItem>
            <Box
              component="img"
              src="/boilingwater.jpg"
              sx={{ width: { md: "40%", xs: "80%" } }}
            />
          </ListItem>
          {/*  */}
          <ListItem>
            <ListItemText>
              2. To prevent lumps, dissolve 2 to 3 tablespoons of Tom Brown
              whole meal in your tea cup using cold water.
            </ListItemText>
          </ListItem>
          <ListItem>
            <Box
              component="img"
              src="/boilingwater.jpg"
              sx={{ width: { md: "40%", xs: "80%" } }}
            />
          </ListItem>
          {/*  */}
          <ListItem>
            <ListItemText>
              3. Add the hot water, stirring until it dissolves completely.
            </ListItemText>
          </ListItem>
          <ListItem>
            <Box
              component="img"
              src="/boilingwater.jpg"
              sx={{ width: { md: "40%", xs: "80%" } }}
            />
          </ListItem>
          {/*  */}
          <ListItem>
            <ListItemText>
              4. Customize your Tom Brown Tea with milk, sugar, or any
              sweeteners you prefer. Stir well.
            </ListItemText>
          </ListItem>
          <ListItem>
            <Box
              component="img"
              src="/boilingwater.jpg"
              sx={{ width: { md: "40%", xs: "80%" } }}
            />
          </ListItem>
          {/*  */}
          <ListItem>
            <ListItemText>
              5. Sip on this highly nutritious tea and relish its unique flavor.
            </ListItemText>
          </ListItem>
          <ListItem>
            <Box
              component="img"
              src="/boilingwater.jpg"
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
                <ImageWithLoader
                  src="/pud1.jpg"
                  alt=""
                  sx={{ width: "100%" }}
                />
                <Box sx={{ p: 3 }}>
                  <Typography
                    component="a"
                    href="/recipies/pudding-recipe"
                    variant="subtitle1"
                  >
                    Tom Brown Whole Meal Pudding Recipe <FaArrowRight />
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
