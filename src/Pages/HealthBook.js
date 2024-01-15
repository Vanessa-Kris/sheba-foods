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
  ListItem,
  ListItemText,
} from "@mui/material";

export default function HealthBook() {
  const rows = [
    {
      ingredient: "Corn",
      nutritionalValue:
        "Rich in carbohydrates, dietary fiber, vitamins (B, C, E), minerals (magnesium, phosphorus, zinc), and antioxidants like lutein and zeaxanthin.",
    },
    {
      ingredient: "Guinea Corn (Sorghum)",
      nutritionalValue:
        "Rich in fiber, protein, vitamins (B, especially niacin and riboflavin), and minerals (iron, magnesium, phosphorus, potassium), providing essential nutrients for a balanced diet.",
    },
    {
      ingredient: "Millet",
      nutritionalValue:
        "Rich in fiber, protein, B vitamins, minerals (magnesium, phosphorus, manganese, copper), and antioxidants.",
    },
    {
      ingredient: "Dates",
      nutritionalValue:
        "Rich in natural sugars, dietary fiber, vitamins (B6, niacin, riboflavin), minerals (potassium, magnesium, copper, manganese, iron), and antioxidants.",
    },
    {
      ingredient: "Soya Beans",
      nutritionalValue:
        "Rich in protein, healthy fats, dietary fiber, vitamins (B6, folate, C, K), and minerals (iron, manganese, phosphorus).",
    },
    {
      ingredient: "Tiger Nuts",
      nutritionalValue:
        " Rich in dietary fiber, healthy fats, vitamins (E, C), minerals (iron, magnesium, potassium), and provide some protein.",
    },
    {
      ingredient: "Groundnuts",
      nutritionalValue:
        "Rich in protein,  healthy fats, vitamins (E, niacin, folate), minerals (magnesium, phosphorus, potassium), dietary fiber, and antioxidants.",
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
        src="https://img.freepik.com/free-photo/close-up-doctor-with-stethoscope_23-2149191362.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph"
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
                Here are some benefits of the ingredients in Tom Brown Whole
                Meal:
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
            Tom Brown whole meal offers a multitude of health benefits, making
            it an excellent choice for treating, maintaining, and supporting
            various health conditions. This well-rounded meal is the ideal,
            balanced option for every member of the family.
          </Typography>

          <Grid container columnSpacing={5} rowSpacing={5} sx={{ mt: 3 }}>
            <Grid item md={6} sm={6} xs={12}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 500 }}>
                Diabeties
              </Typography>
              <Typography variant="p" sx={{ mb: 3, color: "#505050" }}>
                The combination of soya beans, groundnuts, dates, corn, guinea
                corn, millet, and tiger nuts can be beneficial for a diabetic
                patient in several ways:
              </Typography>
              <List sx={{ color: "#505050" }}>
                <ListItem sx={{ fontWeight: 700 }}>
                  * Low Glycemic Index (GI):
                </ListItem>
                <ListItemText>
                  These ingredients generally have a lower glycemic index, which
                  means they cause a slower and steadier rise in blood sugar
                  levels. This is important for managing diabetes as it helps
                  prevent sudden spikes in blood sugar.
                </ListItemText>
                <ListItem sx={{ fontWeight: 700 }}>
                  * High Fiber Content:
                </ListItem>
                <ListItemText>
                  The combination is rich in dietary fiber, which aids in
                  slowing down the absorption of glucose and helps control blood
                  sugar levels. Fiber also contributes to a feeling of fullness,
                  which can be helpful in managing weight, another factor in
                  diabetes management.
                </ListItemText>
                <ListItem sx={{ fontWeight: 700 }}>
                  * Good Source of Protein:
                </ListItem>
                <ListItemText>
                  Soya beans, groundnuts, and tiger nuts are excellent sources
                  of plant-based protein. Protein can help stabilize blood sugar
                  levels and promote satiety, reducing the likelihood of
                  overeating.
                </ListItemText>
                <ListItem sx={{ fontWeight: 700 }}>
                  * Nutrient Density:
                </ListItem>
                <ListItemText>
                  The combination includes a variety of nuts, seeds, and grains,
                  providing a range of essential nutrients such as vitamins,
                  minerals, and antioxidants. These nutrients are important for
                  overall health and can support the immune system.
                </ListItemText>
                <ListItem sx={{ fontWeight: 700 }}>* Healthy Fats:</ListItem>
                <ListItemText>
                  Groundnuts and tiger nuts contain healthy fats, including
                  monounsaturated and polyunsaturated fats. These fats are
                  beneficial for heart health and can be part of a balanced diet
                  for individuals with diabetes.
                </ListItemText>
                <ListItem sx={{ fontWeight: 700 }}>
                  * Slow Release of Energy:
                </ListItem>
                <ListItemText>
                  The mix of ingredients, especially the complex carbohydrates
                  found in millet and whole grains, can contribute to a gradual
                  release of energy. This helps in avoiding rapid increases in
                  blood sugar levels.
                </ListItemText>
              </List>
              <Typography sx={{ color: "#505050" }}>
                However, it's crucial for individuals with diabetes to monitor
                their blood sugar levels regularly and consult with a healthcare
                professional or a registered dietitian. The impact of food on
                blood sugar can vary from person to person, and individual
                dietary needs may differ based on factors such as medications,
                overall health, and lifestyle. It's always advisable to
                customize dietary plans with the guidance of healthcare
                professionals.
              </Typography>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 500 }}>
                High Blood Pressure
              </Typography>
              <Typography variant="p" sx={{ mb: 3, color: "#505050" }}>
                The combination of soya beans, groundnuts, dates, corn, guinea
                corn, millet, and tiger nuts can be beneficial for individuals
                with high blood pressure due to several reasons:
              </Typography>
              <List sx={{ color: "#505050" }}>
                <ListItem sx={{ fontWeight: 700 }}>
                  * Rich in Potassium:
                </ListItem>
                <ListItemText>
                  These ingredients, especially dates, corn, and millet, are
                  good sources of potassium. Potassium helps balance sodium
                  levels in the body, which is crucial for maintaining healthy
                  blood pressure.
                </ListItemText>
                <ListItem sx={{ fontWeight: 700 }}>
                  * Heart-Healthy Fats:
                </ListItem>
                <ListItemText>
                  Soya beans and groundnuts are rich in unsaturated fats,
                  particularly omega-3 fatty acids. These fats can contribute to
                  heart health by reducing inflammation and improving
                  cholesterol levels.
                </ListItemText>
                <ListItem sx={{ fontWeight: 700 }}>* Fiber Content:</ListItem>
                <ListItemText>
                  The combination provides a good amount of dietary fiber, which
                  can help regulate blood pressure. Fiber helps in controlling
                  blood sugar levels and promoting a healthy cardiovascular
                  system.
                </ListItemText>
                <ListItem sx={{ fontWeight: 700 }}>
                  * Magnesium Source:
                </ListItem>
                <ListItemText>
                  Tiger nuts contain magnesium, which plays a role in relaxing
                  blood vessels and improving blood flow. This can contribute to
                  better blood pressure management.
                </ListItemText>
                <ListItem sx={{ fontWeight: 700 }}>
                  * Antioxidant Properties:
                </ListItem>
                <ListItemText>
                  The variety of ingredients in this combination brings in a
                  range of antioxidants. Antioxidants help combat oxidative
                  stress and inflammation, which are factors associated with
                  heart disease, including high blood pressure.
                </ListItemText>
                <ListItem sx={{ fontWeight: 700 }}>
                  * Low Sodium Content:
                </ListItem>
                <ListItemText>
                  {" "}
                  Nuts, seeds, and whole grains generally have low sodium
                  content, which is favorable for individuals with high blood
                  pressure as high sodium intake is linked to elevated blood
                  pressure.
                </ListItemText>
              </List>
              <Typography sx={{ color: "#505050" }}>
                While this combination has potential benefits, it's important to
                note that dietary recommendations for individuals with high
                blood pressure may vary based on individual health conditions.
                It's advisable for individuals with hypertension to consult with
                a healthcare professional or a registered dietitian to ensure
                that their diet is tailored to their specific needs and doesn't
                interfere with any prescribed medications. Additionally,
                moderation is key, as an overall balanced and varied diet is
                crucial for overall health.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
