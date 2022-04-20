import React from "react";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import Divider from "@mui/material/Divider";
// import ListItemText from "@mui/material/ListItemText";
// import Typography from "@mui/material/Typography";
// import Cabecera from "../Cabecera";
// import styled from "styled-components";
import { Button } from "@mui/material";
// import netux from "../../img/netux.png";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
// import HeaderPag from "../HeaderPag";
// import grupo from "../../img/grupo.png";
import OnlyFrm from "./OnlyFrm";

import HeaderPag2 from "../HeaderPag2";
import Oficinas from "../Oficinas/Oficinas";
// import NestedModal from "./ModalResultado";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const styles = {
  header: {
    top: "0px",
    left: "0px",
    width: "100%",
    height: "137px",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #00000029",
    opacity: "1",
    position: "absolute",
  },
  boton: {
    marginTop: "10%",
    borderRadius: "30px",
    width: "300px",
    height: "40px",
  },
  lista: {
    marginTop: "1%",
    marginLeft: "10%",
  },
  texto1: {
    top: "0",
    left: "0",
    width: "243px",
    height: "28px",
    textAlign: "left",
    fontFamily: "Lato, Helvetica, sans-serif",
    fontWeight: "bold",
    fontSize: "30px",
    letterSpacing: "0",
    color: "#1F9547",
  },
  div: {
    textAlign: "center",
    width: "25%",
    background: "white",
  },
  campoTexto: {
    marginTop: "100px",
  },
  grupo: {
    position: "absolute",
    right: "2%",
    width: "1000px",
    bottom: "10%",
  },
};

export default function Formulario(props) {
  const { setPaso, paso, setEstado } = props;
  let navigate = useNavigate();
  // const [dataForm, setDataForm] = useState(null);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // setDataForm(data);
    setEstado(data);
    navigate("/confirmacion");
  };

  return (
    <div>
      <div style={styles.header}>
        {/* <HeaderPag/> */}
        <div>
          <HeaderPag2 setPaso={setPaso} paso={paso} />
        </div>

        {/* <Cabecera /> */}
        <form onSubmit={handleSubmit(onSubmit)} className="formulario">
          {paso === 0 && (
            <Oficinas setPaso={setPaso} paso={paso} register={register} />
          )}
          {paso === 1 && (
            <div style={styles.div}>
              <div style={styles.campoTexto}>
                <b style={styles.texto1}>Ingresa tus datos</b>
              </div>
              <OnlyFrm register={register} />
              <Button
                style={styles.boton}
                variant="contained"
                color="primary"
                // onClick={() => setPaso(paso + 1)}
                type="submit"
              >
                Generar
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
