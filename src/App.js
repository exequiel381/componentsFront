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
import Prueba from "./pages/Pruebas/prueba";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./temaConfig";
import { useState } from "react";
import { pagesForNav, rightButtons, pagesForSide } from "./ColectionsExports";

export const rootPath = "/";
function App() {
  const [loged, setLoged] = useState(false);
  const settings = loged ? ["Dashboard", "Logout"] : ["Register"];

  return (
    <ThemeProvider theme={Theme}>
      {/* <Router history={createHistory}> */}
      <Router>
        <Navbar
          pages={pagesForNav}
          rightButtons={rightButtons}
          settings={settings}
          name="TITULO"
          sideTitle={"TITULO"}
          pagesForSide={pagesForSide}
          Sidebar
        ></Navbar>
        <Routes>
          <Route exact path="/" element={<Prueba></Prueba>}></Route>
          <Route path="/prueba" element={<Prueba></Prueba>}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
