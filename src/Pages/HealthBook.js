import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
} from "@mui/material";

export default function HealthBook() {
  const rows = [
    { ingredient: "Corn", nutritionalValue: "Rich in carbohydrates and fiber" },
    {
      ingredient: "Guinea Corn",
      nutritionalValue: "Good source of energy and nutrients",
    },
    {
      ingredient: "Millet",
      nutritionalValue: "High in antioxidants and vitamins",
    },
    {
      ingredient: "Dates",
      nutritionalValue: "High in fiber, vitamins, and minerals",
    },
    {
      ingredient: "Soya Beans",
      nutritionalValue: "Excellent source of protein and fiber",
    },
    {
      ingredient: "Tiger Nuts",
      nutritionalValue: "Rich in fiber, vitamins, and minerals",
    },
  ];

  const rows2 = [
    {
      ingredients: "Corn",
      protein: "90%",
      carbohydrates: "90%",
      fiber: "90%",
      calories: "20%",
    },
    {
      ingredients: "Guinea Corn",
      protein: "90%",
      carbohydrates: "90%",
      fiber: "90%",
      calories: "20%",
    },
    {
      ingredients: "Millet",
      protein: "90%",
      carbohydrates: "90%",
      fiber: "90%",
      calories: "20%",
    },
    {
      ingredients: "Dates",
      protein: "90%",
      carbohydrates: "90%",
      fiber: "90%",
      calories: "20%",
    },
    {
      ingredients: "Soya Beans",
      protein: "90%",
      carbohydrates: "90%",
      fiber: "90%",
      calories: "20%",
    },
    {
      ingredients: "Tiger Nuts",
      protein: "90%",
      carbohydrates: "90%",
      fiber: "90%",
      calories: "20%",
    },
  ];

  return (
    <Box>
      <Box
        component="img"
        src="/powder.jpg"
        alt=""
        sx={{ width: "100%", pt: { xs: 7 } }}
      />
      <Box sx={{ m: { md: 15, sm: 10, xs: 3 } }}>
        <Typography variant="h6">
          Tom Brown Whole Meal Contains a myriad of nutrients that are
          sustainable for all ages
        </Typography>

        <Box sx={{ mt: 10 }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Ingredient</TableCell>
                  <TableCell>Nutritional Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.ingredient}</TableCell>
                    <TableCell>{row.nutritionalValue}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box sx={{ mt: 10 }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Ingredient</TableCell>
                  <TableCell>Protein</TableCell>
                  <TableCell>Carbohydrates</TableCell>
                  <TableCell>Fiber</TableCell>
                  <TableCell>Calories</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows2.map((row2, index) => (
                  <TableRow key={index}>
                    <TableCell>{row2.ingredients}</TableCell>
                    <TableCell>{row2.protein}</TableCell>
                    <TableCell>{row2.carbohydrates}</TableCell>
                    <TableCell>{row2.fiber}</TableCell>
                    <TableCell>{row2.calories}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box sx={{ mt: 10 }}>
          <Grid container columnSpacing={5} rowSpacing={5}>
            <Grid item md={6} sm={6} xs={12}>
              <Box
                component="img"
                src="/father.png"
                sx={{ width: "100%", borderRadius: "30px" }}
              />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 500 }}>
                Why Is Tom Brown Whole Meal Good For Children?
              </Typography>
              <Typography variant="p" sx={{ mb: 3 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
              <Typography variant="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        {/*  */}
        <Box sx={{ mt: 10 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 500 }}>
            Health Benefits of Tom Brown Whole Meal For Aged Adults
          </Typography>
          <Typography variant="p" sx={{ mb: 3 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
