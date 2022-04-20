import React, { Component } from "react";
import Cabecera from "../Cabecera";

import index from "../../img/index.png";
import netux from "../../img/netux.png";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Button } from "@mui/material";
import { imagenVariants, itemVariants } from "../../styles/framerVariants";

const styles = {
  div: {
    margin: "100px",
  },
  header: {
    position: "absolute",
    bottom: "25%",
    width: "800px",
    right: "2%",
    zIndex: "-1",
  },
  netux: {
    position: "absolute",
    right: "2%",
    width: "10%",
    bottom: "5%",
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
  texto2: {
    marginTop: "8px",
    fontFamily: "Lato, Helvetica, sans-serif",
    fontSize: "25px",
    letterSpacing: "0",
    color: "#1F9547",
  },
  lista: {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
  },
  icono: {
    borderRadius: "50%",
    background: "#1F9547",
    width: "20px",
    height: "20px",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginRight: "20px",
    padding: "1%",
    color: "white",
  },
  texto: {
    fontFamily: "Lato, Helvetica, sans-serif",
    fontSize: "20px",
    letterSpacing: "0",
    color: "#000000",
  },
  boton: {
    position: "absolute",
    marginTop: "30px",
    borderRadius: "30px",
    width: "300px",
    height: "40px",
  },
};
const ListItemMotion = motion(ListItem);

export default class Home extends Component {
  render() {
    return (
      <div>
        <Cabecera />
        <div style={styles.div}>
          <div style={styles.campoTexto}>
            <b style={styles.texto1}>Solicita tu turno virtual</b>
            <p style={styles.texto2}>y realiza todos tus tramites sin filas.</p>
          </div>
          <div>
            <motion.img
              variants={imagenVariants}
              initial="hidden"
              animate="visible"
              style={styles.header}
              src={index}
            />
          </div>

          <img style={styles.netux} src={netux} />

          <b style={styles.texto}>Como solicitar tu turno</b>

          <List sx={styles.lista} component="nav" aria-label="mailbox folders">
            <ListItemMotion
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              custom={{ delay: 1 }}
            >
              <div style={styles.icono}>1</div>
              <ListItemText primary="Selecciona la oficina mas cercana." />
            </ListItemMotion>
            <ListItemMotion
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              custom={{ delay: 2 }}
            >
              <div style={styles.icono}>2</div>
              <ListItemText primary="Ingresa tus datos." />
            </ListItemMotion>
            <ListItemMotion
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              custom={{ delay: 3 }}
            >
              <div style={styles.icono}>3</div>
              <ListItemText primary="Selecciona el servicio." />
            </ListItemMotion>
            <ListItemMotion
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              custom={{ delay: 4 }}
            >
              <div style={styles.icono}>4</div>
              <ListItemText primary="Verifica tu información." />
            </ListItemMotion>
          </List>

          <Link to="/formulario">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              custom={{ delay: 5 }}
            >
              <Button style={styles.boton} variant="contained" color="primary">
                Solicitar turno
              </Button>
            </motion.div>
          </Link>
        </div>
      </div>
    );
  }
}
