import React, { useState, useCallback } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Button, Radio } from "@mui/material";
import styled from "styled-components";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MapGeolocalizacion from "../MapGeolocalizacion/Map";
import { itemVariants } from "../../styles/framerVariants";
import Seacher from "./Search";

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
    // marginLeft: "10%",
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
    marginTop: "20px",
    paddingLeft: "10px",
  },
  mapa: {
    position: "absolute",
    right: "2%",
    width: "1300px",
    bottom: "5%",
    zIndex: "-1",
    marginTop: "10%",
  },
};
const DivContainerOficinas = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;
`;

const initialState = [
  {
    sede: 1,
    direccion: "Cra. 16 ##1426, Arauca",
    lat: 7.087673338046337,
    lng: -70.7598964403235,
    horario: "8am-5pm",
    nombre: "sede 1",
  },
  {
    sede: 2,
    direccion: "Cra. 20 #25-45, Arauca",
    lat: 7.088439910733274,
    lng: -70.7598964403295,
    horario: "8am-5pm",
    nombre: "sede 2",
  },
  {
    sede: 3,
    direccion: "Cra. 19 #24-45, Arauca",
    nombre: "sede 3",
    lat: 7.086310539009829,
    lng: -70.76040364631015,
    horario: "8am-5pm",
  },
  {
    sede: 4,
    nombre: "sede 4",
    direccion: "Cra. 21 #20-45, Arauca",
    lat: 7.0868215891207775,
    lng: -70.75555421241123,
    horario: "8am-5pm",
  },
  {
    sede: 5,
    nombre: "sede 5",
    direccion: "Cra. 18 #20-45, Arauca",
    lat: 7.088439910733274,
    lng: -70.75503922828037,
    horario: "8am-5pm",
  },
];
export default function Oficinas({ setPaso, paso, register }) {
  const [markers, setMarkers] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const handleSearch = useCallback((evento) => {
    setBusqueda(evento.target.value);
  }, []);
  // const filteredProducts = useMemo(
  //   () =>
  //     initialState.filter((sede) => {
  //       const querySede = sede.nombre
  //         .toLowerCase()
  //         .includes(busqueda.toLowerCase());
  //       if (querySede) {
  //         return querySede;
  //       }
  //       return querySede;
  //     }),
  //   [initialState, busqueda]
  // );

  return (
    <DivContainerOficinas>
      <header>
        {/* <HeaderPag/> */}
        {/* <Cabecera/> */}
        <div
        //  style={styles.div}
        >
          <div style={styles.campoTexto}>
            <b style={styles.texto1}>Selecciona la oficina mas cercana</b>
          </div>
          <List
            style={styles.lista}
            sx={{
              width: "100%",
              //   maxWidth: 360,
              bgcolor: "background.paper",
              position: "relative",
              overflow: "auto",
              maxHeight: 500,
              "& ul": { padding: 0 },
            }}
          >
            <FormControl>
              <Seacher handleSearch={handleSearch} busqueda={busqueda} />
              <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                {...register("sede")}
              >
                {initialState.map((item, index) => {
                  const objetoValue = {
                    sede: item.sede,
                    direccion: item.direccion,
                  };
                  const objetoValueString = JSON.stringify(objetoValue);
                  return (
                    <ListItem
                      alignItems="flex-start"
                      key={`${item.sede}${index}`}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={{ delay: index }}
                    >
                      <FormControlLabel
                        value={objetoValueString}
                        control={<Radio />}
                        label=""
                      />
                      <ListItemText
                        primary={`Sede ${item.sede}`}
                        secondary={
                          <>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              {item.direccion}
                            </Typography>
                            <br />
                            {item.horario}
                          </>
                        }
                      />
                      <Divider variant="inset" component="div" />
                    </ListItem>
                  );
                })}
              </RadioGroup>
            </FormControl>
          </List>
          <Button
            style={styles.boton}
            variant="contained"
            color="primary"
            onClick={() => setPaso(paso + 1)}
            type="button"
          >
            Seleccionar
          </Button>
        </div>
      </header>
      <div>
        <MapGeolocalizacion
          markers={markers}
          setMarkers={setMarkers}
          initialState={initialState}
        />
      </div>
      {/* <img style={styles.mapa} src={mapa} /> */}
    </DivContainerOficinas>
  );
}
