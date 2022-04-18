import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Cabecera from "../Cabecera";
import {Button, Radio} from "@mui/material";


import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import HeaderPag from "../HeaderPag";
import mapa from "../../img/mapa.png";

const styles = {
    header:{
        top: "0px",
        left: "0px",
        width: "100%",
        height: "137px",
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: "0px 3px 6px #00000029",
        opacity: "1",
        position: "absolute"
    },
    boton: {
        marginTop: "10%",
        borderRadius: "30px",
        width: "300px",
        height: "40px",
    },
    lista: {
        marginTop: "1%",
        marginLeft: "10%"
    },
    texto1 : {
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
    div : {
        textAlign: "center",
        width: "25%",
        background: "white"
    },
    campoTexto:{
        marginTop: "100px"
    },
    mapa: {
        position: "absolute",
        right: "2%",
        width: "1300px",
        bottom: "5%",
        zIndex: "-1",
        marginTop: "10%"
    },
}

export default function Oficinas() {
    return (
        <div>
            <header style={styles.header}>
                <HeaderPag/>
            <Cabecera/>
            <div style={styles.div}>
                <div style={styles.campoTexto}>
                    <b style={styles.texto1}>Selecciona la oficina mas cercana</b>
                </div>
                <List  style={styles.lista} sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 500,
                    '& ul': { padding: 0 },
                }}>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group">
                            <ListItem alignItems="flex-start">
                                <FormControlLabel value="sede1" control={<Radio />} label="" />
                                <ListItemText
                                    primary="Sede 1"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                Calle 1 # 20 - 35
                                            </Typography><br/>
                                            {"Horario: 7:00 Am - 5:00 Pm"}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <FormControlLabel value="sede2" control={<Radio />} label="" />
                                <ListItemText
                                    primary="Sede 2"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                Calle 1 # 20 - 35
                                            </Typography><br/>
                                            {"Horario: 7:00 Am - 5:00 Pm"}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <FormControlLabel value="sede3" control={<Radio />} label="" />
                                <ListItemText
                                    primary="Sede 3"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                Calle 1 # 20 - 35
                                            </Typography><br/>
                                            {"Horario: 7:00 Am - 5:00 Pm"}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <FormControlLabel value="sede4" control={<Radio />} label="" />
                                <ListItemText
                                    primary="Sede 4"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                Calle 1 # 20 - 35
                                            </Typography><br/>
                                            {"Horario: 7:00 Am - 5:00 Pm"}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <FormControlLabel value="sede5" control={<Radio />} label="" />
                                <ListItemText
                                    primary="Sede 5"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                Calle 1 # 20 - 35
                                            </Typography><br/>
                                            {"Horario: 7:00 Am - 5:00 Pm"}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <FormControlLabel value="sede6" control={<Radio />} label="" />
                                <ListItemText
                                    primary="Sede 6"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                Calle 1 # 20 - 35
                                            </Typography><br/>
                                            {"Horario: 7:00 Am - 5:00 Pm"}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </RadioGroup>
                    </FormControl>
                </List>
                <Button style={styles.boton} variant="contained" color="primary">
                    Seleccionar
                </Button>
            </div>
            </header>
            <img style={styles.mapa} src={mapa} />
        </div>
    );
}
