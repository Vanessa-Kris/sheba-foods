import React, { useState, useEffect } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PageNotFound from "./Pages/404";
import NavBar from "./Components/Nav";
import Footer from "./Components/Footer";
import Landing from "./Pages/Landing";
import About from "./Pages/About";
import Recipies from "./Pages/Recipies";
import HealthBook from "./Pages/HealthBook";
import Events from "./Pages/Events";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import WholeMeal from "./Products/WholeMeal";
import Apron from "./Products/Apron";
import Mug from "./Products/Mug";
import Shirt from "./Products/Shirt";
import Stockist from "./Pages/Stockist";
import Tearecipe from "./Sections/Tearecipe";
import Pancakerecipe from "./Sections/Pancakerecipe";
import Puddingrecipe from "./Sections/Puddingrecipe";
import Swallowrecipe from "./Sections/Swallowrecipe";
import Loader from "./Components/Loader";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#698F3C",
    },
    secondary: {
      main: "#d68c0e",
    },
    text: {
      primary: "#2b2929",
      secondary: "#FFFBE7",
    },
    background: {
      default: "#FFFBE7",
      paper: "#fdfbf0",
    },
  },
});

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/recipies",
      element: <Recipies />,
    },
    {
      path: "/products",
      element: <Shop />,
    },
    {
      path: "/stockist",
      element: <Stockist />,
    },
    {
      path: "/health-book",
      element: <HealthBook />,
    },
    {
      path: "/events",
      element: <Events />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
    {
      path: "/products/tom-brown-whole-meal",
      element: <WholeMeal />,
    },
    {
      path: "/products/apron",
      element: <Apron />,
    },
    {
      path: "/products/mug",
      element: <Mug />,
    },
    {
      path: "/products/shirt",
      element: <Shirt />,
    },
    {
      path: "/recipies/tea-recipe",
      element: <Tearecipe />,
    },
    {
      path: "/recipies/pancake-recipe",
      element: <Pancakerecipe />,
    },
    {
      path: "/recipies/pudding-recipe",
      element: <Puddingrecipe />,
    },
    {
      path: "/recipies/swallow-recipe",
      element: <Swallowrecipe />,
    },
  ]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar />
          <RouterProvider router={router} />
          <Footer />
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
