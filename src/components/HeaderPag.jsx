import { Component } from "react";
import netux from "../img/netux.png";

const styles = {
  div: {
    width: "400px",
    margin: "50px auto",
    textAlign: "center",
    position: "relative",
  },
  div2: {
    position: "relative",
    textAlign: "center",

    width: "100%",
  },
  icono: {
    borderRadius: "50%",
    background: "#1F9547",
    width: "20px",
    height: "20px",
    marginRight: "20px",
    padding: "1%",
    color: "white",
    paddingTop: "10px",
    position: "absolute",
    marginTop: "40px",
  },
  netux: {
    position: "absolute",
    right: "2%",
    width: "10%",
    bottom: "15%",
  },
};
export default class HeaderPag extends Component {
  render() {
    return (
      <div>
        <div style={styles.div}>
          <div style={styles.div2}>
            <ul id="progressbar">
              <li className="active">Sede</li>
              <li>Datos</li>
              <li>Finalizar</li>
            </ul>
          </div>
        </div>
        <img style={styles.netux} src={netux} alt="asdf" />
      </div>
    );
  }
}
