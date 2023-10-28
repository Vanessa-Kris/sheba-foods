import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PageNotFound from "./Pages/404";
import NavBar from "./Components/Nav";
import Footer from "./Components/Footer";
import Landing from "./Pages/Landing";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFFBE7",
    },
    secondary: {
      main: "#000",
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
      path: "*",
      element: <PageNotFound />,
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
