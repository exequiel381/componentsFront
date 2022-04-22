import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Routes,
} from "react-router-dom";
//import createHistory from "history/createBrowserHistory"; //Eliminar # de la ruta
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home";
import washington from "./images/Washington.png";
import sanfer from "./images/SANFERNANDO.png";
import santodom from "./images/santodomingo.png";
import ipef from "./images/IPEF.png";
import Prueba from "./pages/prueba";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./temaConfig";
import { useState } from "react";

const pagesForNav = [
  {
    title: "Washington",
    image: washington,
    route: "/Washington",
  },
  {
    title: "SAN FERNANDO",
    image: sanfer,
    route: "/sanfer",
  },
  {
    title: "SANTO DOMINGO",
    image: santodom,
    route: "/santodom",
  },
  {
    title: "IPEF",
    image: ipef,
    route: "/Ipef",
  },
];

const pagesForSide = [
  {
    text: "Washington",

    route: "/Washington",
    subPages: [
      {
        text: "Washington",

        route: "/Washington",
      },
      {
        text: "Washington",

        route: "/Washington",
      },
    ],
  },
  {
    text: "SAN FERNANDO",

    route: "/sanfer",
  },
  {
    text: "SANTO DOMINGO",

    route: "/santodom",
  },
  {
    text: "IPEF",

    route: "/Ipef",
  },
];

function App() {
  const [loged, setLoged] = useState(false);
  const settings = loged ? ["Dashboard", "Logout"] : ["Register"];

  return (
    <ThemeProvider theme={Theme}>
      {/* <Router history={createHistory}> */}
      <Router>
        <Navbar
          pages={pagesForNav}
          settings={settings}
          name="TITULO"
          pagesForSide={pagesForSide}
          Sidebar
        ></Navbar>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route path="/prueba" element={<Prueba></Prueba>}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
