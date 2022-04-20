import React from "react";
import styled from "styled-components";
import index from "../../img/index.png";
const DivContainerOficinas = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;
`;
const Confirmacion = ({ estado }) => {
  function SaveAsPdf() {
    var api_endpoint = "https://selectpdf.com/api2/convert/";
    var api_key = "your license key here";

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
      if (this.status === 200) {
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
  return estado ? (
    <DivContainerOficinas>
      <div>
        <h1>Verfica Informacion</h1>
        <h4>
          {estado.primerNombre} {estado.segundoNombre} {estado.primerApellido}{" "}
          {estado.segundoApellido}{" "}
        </h4>
        <p>C.C. {estado.cedula}</p>
        <h4>Consulta externa</h4>
        <h4>Sede {JSON.parse(estado.sede).sede}</h4>
        <h4>Dirección: {JSON.parse(estado.sede).direccion}</h4>
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
  ) : (
    <div>Debe completar el formulario</div>
  );
};

export default Confirmacion;
