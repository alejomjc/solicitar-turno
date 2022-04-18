import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const style = {
    lista: {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
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
    }
};

export default function ListaIndex() {
    return (
        <div>
            <b style={style.texto}>Como solicitar tu turno</b>

            <List sx={style.lista} component="nav" aria-label="mailbox folders">
                <ListItem>
                    <div style={style.icono}>1</div>
                    <ListItemText primary="Selecciona la oficina mas cercana." />
                </ListItem>
                <ListItem>
                    <div style={style.icono}>2</div>
                    <ListItemText primary="Ingresa tus datos." />
                </ListItem>
                <ListItem >
                    <div style={style.icono}>3</div>
                    <ListItemText primary="Selecciona el servicio." />
                </ListItem>
                <ListItem >
                    <div style={style.icono}>4</div>
                    <ListItemText primary="Verifica tu información." />
                </ListItem>
            </List>
        </div>
    );
}

