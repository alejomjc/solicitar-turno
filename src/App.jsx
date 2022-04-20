import "./App.css";
import { useState } from "react";
import Home from "./components/Home/Home";
// import Oficinas from "./components/Oficinas/Oficinas";
import Formulario from "./components/Formulario/Formulario";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import { HashRouter, Routes, Route } from "react-router-dom";
import Confirmacion from "./components/Confirmacion";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3F3F41",
    },
  },
});

function App() {
  const [paso, setPaso] = useState(0);
  const [estado, setEstado] = useState(null);
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/formulario"
            element={
              <Formulario setPaso={setPaso} paso={paso} setEstado={setEstado} />
            }
          />
          <Route
            path="/confirmacion"
            element={<Confirmacion estado={estado} />}
          />
          {/*<Oficinas/>*/}
          {/* <Formulario/> */}
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
