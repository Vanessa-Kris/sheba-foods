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
  List,
  ListItemText,
  ListItem,
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
        src="https://img.freepik.com/free-photo/healthy-food-medical-equipment_23-2148108966.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph"
        alt=""
        sx={{ width: "100%", pt: { xs: 7 } }}
      />
      <Box sx={{ m: { md: 15, sm: 10, xs: 3 } }}>
        <Typography variant="h6">
          Tom Brown Whole Meal Contains a myriad of nutrients that are
          sustainable for all ages
        </Typography>

        <Box sx={{ mt: 10 }}>
          <Typography
            variant="p"
            sx={{ fontStyle: "italic", color: "#505050" }}
          >
            Verified by the nigerian food association
          </Typography>
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
                The Power of Tom Brown Whole Meal for Children's Health
              </Typography>
              <Typography variant="p" sx={{ mb: 3, color: "#505050" }}>
                Tom Brown Whole Meal can be considered a nutritious option for
                children for several reasons, given its ingredient composition.
                Here are some potential benefits of the ingredients you
                mentioned:
              </Typography>

              <Typography variant="p" sx={{ mt: 3, color: "#505050" }}>
                In combination, these ingredients offer a diverse range of
                nutrients, including carbohydrates for energy, protein for
                growth and development, healthy fats for brain health, and a
                variety of vitamins and minerals that are essential for overall
                well-being.
              </Typography>
              <Typography variant="p" sx={{ mt: 3, color: "#505050" }}>
                However, it's important to note that individual dietary needs
                can vary, and any specific dietary recommendations should be
                made in consultation with a healthcare professional or a
                nutritionist, especially when it comes to children.
                Additionally, it's crucial to be aware of any potential
                allergies or sensitivities that a child may have to specific
                ingredients in Tom Brown Whole Meal.
              </Typography>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <List sx={{ color: "#505050" }}>
                <ListItem>
                  1. Corn: Rich in fiber, vitamins, and minerals, corn provides
                  energy and supports digestive health.
                </ListItem>
                <ListItem>
                  2. Millet: Millet is a good source of essential nutrients such
                  as magnesium, phosphorus, and iron. It also contains fiber,
                  which aids digestion.
                </ListItem>
                <ListItem>
                  3. Guinea Corn (Sorghum): This grain is high in antioxidants,
                  rich in fiber, and provides essential nutrients like iron,
                  magnesium, and B vitamins.
                </ListItem>
                <ListItem>
                  3. Guinea Corn (Sorghum): This grain is high in antioxidants,
                  rich in fiber, and provides essential nutrients like iron,
                  magnesium, and B vitamins.
                </ListItem>
                <ListItem>
                  4. Tiger Nut: Tiger nuts are a good source of healthy fats,
                  fiber, and various vitamins and minerals. They provide energy
                  and can contribute to heart health.
                </ListItem>
                <ListItem>
                  5. Dates: Dates are a natural sweetener and provide natural
                  sugars, fiber, and various vitamins and minerals.
                </ListItem>
                <ListItem>
                  6. Soya Beans: Soya beans are a complete protein source,
                  containing all essential amino acids. They also provide
                  healthy fats, vitamins, and minerals.
                </ListItem>
                <Typography variant="p" sx={{ color: "#505050" }}>
                  7. Groundnuts (Peanuts): Groundnuts are a good source of
                  protein, healthy fats, and various vitamins and minerals,
                  including folate and niacin.
                </Typography>
              </List>
              <Typography variant="p" sx={{ mt: 3, color: "#505050" }}>
                In combination, these ingredients offer a diverse range of
                nutrients, including carbohydrates for energy, protein for
                growth and development, healthy fats for brain health, and a
                variety of vitamins and minerals that are essential for overall
                well-being.
              </Typography>
              <Typography variant="p" sx={{ mt: 3, color: "#505050" }}>
                However, it's important to note that individual dietary needs
                can vary, and any specific dietary recommendations should be
                made in consultation with a healthcare professional or a
                nutritionist, especially when it comes to children.
                Additionally, it's crucial to be aware of any potential
                allergies or sensitivities that a child may have to specific
                ingredients in Tom Brown Whole Meal.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        {/*  */}
        <Box sx={{ mt: 10 }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 500 }}>
            Health Benefits of Tom Brown Whole Meal For Different Health
            Conditions
          </Typography>
          <Typography variant="p" sx={{ mb: 3, color: "#505050" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <Typography variant="p" sx={{ color: "#505050" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>

          <Grid container columnSpacing={5} rowSpacing={5} sx={{ mt: 3 }}>
            <Grid item md={6} sm={6} xs={12}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 500 }}>
                Diabeties
              </Typography>
              <Typography variant="p" sx={{ mb: 3, color: "#505050" }}>
                Such a blend can offer a mix of nutrients, including fiber, healthy fats, and protein, which may help regulate blood sugar levels. The fiber content in corn, millet, and other ingredients can slow down the absorption of sugar, potentially aiding in better blood sugar control. Additionally, tiger nuts and soybeans provide protein, which can contribute to satiety and help manage blood sugar. However, individual responses to foods can vary, so it's advisable for a diabetic person to consult with a healthcare professional or a nutritionist for personalized advice.
              </Typography>
              <List sx={{ color: "#505050" }}>
                <ListItemText>Lorem</ListItemText>
                <ListItemText>Lorem</ListItemText>
                <ListItemText>Lorem</ListItemText>
                <ListItemText>Lorem</ListItemText>
                <ListItemText>Lorem</ListItemText>
              </List>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 500 }}>
                High Blood Pressure
              </Typography>
              <Typography variant="p" sx={{ mb: 3, color: "#505050" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
              <List sx={{ color: "#505050" }}>
                <ListItemText>Lorem</ListItemText>
                <ListItemText>Lorem</ListItemText>
                <ListItemText>Lorem</ListItemText>
                <ListItemText>Lorem</ListItemText>
                <ListItemText>Lorem</ListItemText>
              </List>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
