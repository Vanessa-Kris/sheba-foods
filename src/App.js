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
      paper: "#698F3C",
    },
  },
});

function App() {
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
  ]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <RouterProvider router={router} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
