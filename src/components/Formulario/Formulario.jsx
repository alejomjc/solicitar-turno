import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Cabecera from "../Cabecera";
import styled from "styled-components";
import { Button, Radio } from "@mui/material";
import netux from "../../img/netux.png";

import index from "../../img/index.png";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import HeaderPag from "../HeaderPag";
import grupo from "../../img/grupo.png";
import OnlyFrm from "./OnlyFrm";

import HeaderPag2 from "../HeaderPag2";
import Oficinas from "../Oficinas/Oficinas";
import NestedModal from "./ModalResultado";
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

const DivContainerOficinas = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;
`;

export default function Formulario({ setPaso, paso }) {
  const [dataForm, setDataForm] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setDataForm(data);
    setPaso(paso + 1);
  };
  function SaveAsPdf() {
    var api_endpoint = "https://selectpdf.com/api2/convert/";
    var api_key = "3a749032-26bd-4ef6-a0c5-a64bb673e3c0";

    var url = window.location.href; // current page

    var params = {
      key: api_key,
      url: url,
    };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", api_endpoint, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.responseType = "arraybuffer";

    xhr.onload = function (e) {
      if (this.status == 200) {
        //console.log('Conversion to PDF completed ok.');

        var blob = new Blob([this.response], { type: "application/pdf" });
        var url = window.URL || window.webkitURL;
        var fileURL = url.createObjectURL(blob);
        //window.location.href = fileURL;

        //console.log('File url: ' + fileURL);

        var fileName = "Document.pdf";

        if (navigator.appVersion.toString().indexOf(".NET") > 0) {
          // This is for IE browsers, as the alternative does not work
          window.navigator.msSaveBlob(blob, fileName);
        } else {
          // This is for Chrome, Firefox, etc.
          var a = document.createElement("a");
          document.body.appendChild(a);
          a.style = "display: none";
          a.href = fileURL;
          a.download = fileName;
          a.click();
        }
      } else {
        //console.log("An error occurred during conversion to PDF: " + this.status);
        alert(
          "An error occurred during conversion to PDF.\nStatus code: " +
            this.status +
            ", Error: " +
            String.fromCharCode.apply(null, new Uint8Array(this.response))
        );
      }
    };

    xhr.send(JSON.stringify(params));
  }

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
        {paso === 2 && dataForm && (
          <DivContainerOficinas>
            <div>
              <h1>Verfica Informacion</h1>
              <h4>
                {dataForm.primerNombre} {dataForm.segundoNombre}{" "}
                {dataForm.primerApellido} {dataForm.segundoApellido}{" "}
              </h4>
              <p>C.C. {dataForm.cedula}</p>
              <h4>Consulta externa</h4>
              <h4>Sede {JSON.parse(dataForm.sede).sede}</h4>
              <h4>Dirección: {JSON.parse(dataForm.sede).direccion}</h4>
              <button type="button" onClick={SaveAsPdf}>
                Generar PDF
              </button>
              {/* <NestedModal dataForm={dataForm} /> */}
            </div>
            <div>
              <h1>Image</h1>
              <img src={index} alt="d" />
            </div>
          </DivContainerOficinas>
        )}
      </div>
    </div>
  );
}
