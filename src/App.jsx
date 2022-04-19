import "./App.css";
import { useState } from "react";
import Home from "./components/Home/Home";
import Oficinas from "./components/Oficinas/Oficinas";
import Formulario from "./components/Formulario/Formulario";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3F3F41",
    },
  },
});

function App() {
  const [paso, setPaso] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/formulario"
            element={<Formulario setPaso={setPaso} paso={paso} />}
          />
          {/*<Oficinas/>*/}
          {/* <Formulario/> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
