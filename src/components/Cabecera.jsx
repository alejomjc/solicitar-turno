import React, {Component} from "react";
import cruz_verde from "../img/cruz_verde.png";

const styles = {
    header: {
        top: "0px",
        left: "0px",
        width: "100%",
        height: "137px",
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: "0px 3px 6px #00000029",
        opacity: "1",
    },
    divLogo:{
        top: "0px",
        left: "0px",
        width: "429px",
        height: "137px",
        /* UI Properties */
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: "0px 3px 6px #00000029",
        borderRadius: "3px 3px 63px 3px",
        opacity: "1",
        position: "absolute"
    },
    logo:{
        position: "fixed",
        top: "42px",
        left: "82px",
        width: "266px",
        height: "54px",
        opacity: "1"
    }
}

export default class Cabecera extends Component{
    render() {
        return (
            <div style={styles.divLogo}>
                <img src={cruz_verde} style={styles.logo} alt="logo" />
            </div>
        )
    }
}
