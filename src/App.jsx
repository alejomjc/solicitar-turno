import './App.css';
import Home from "./components/Home/Home";
import Oficinas from "./components/Oficinas/Oficinas";
import Formulario from "./components/Formulario/Formulario";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/material";


const theme = createTheme({
  palette:{
    primary:{
      main: '#3F3F41'
    }
  }
})

function App() {
  return (
      <ThemeProvider theme={theme}>
          {/*<Home/>*/}
          {/*<Oficinas/>*/}
          <Formulario/>
      </ThemeProvider>
  );
}

export default App;
