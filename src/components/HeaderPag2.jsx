import React from "react";
import { Stepper, Step } from "react-form-stepper";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Cabecera from "./Cabecera";
const mediaquerys = {
  xs: "@media(min-width :650px)",
  sm: "@media(min-width :960px)",
  md: "@media(min-width :1280px)",
  lg: "@media(min-width :1400px)",
  xl: "@media(min-width :1920px)",
};

const DivContainerHeaderPag2 = styled.div`
  display: grid;
  ${mediaquerys.xs} {
    grid-template-columns: 30% 70%;
    align-items: center;
  }
  button {
    border: none;
  }
`;
const HeaderPag2 = ({ paso }) => {
  const styles = {
    activeBgColor: "orange",
    activeTextColor: "white",
    completedBgColor: "grey",
    completedTextColor: "white",
    inactiveBgColor: "white",
    inactiveTextColor: "orange",
    size: "40px",
    borderRadius: "50%",
    circleFontSize: "20px",
    labelFontSize: "14px",
    fontWeight: 500,
  };
  return (
    <DivContainerHeaderPag2>
      <div>
        <Cabecera />
      </div>
      <div>
        <div>
          <Link to="/">Atrás</Link>
        </div>
        <Stepper activeStep={paso} styleConfig={styles}>
          <Step label="Seleccion de oficina" />
          <Step label="Información" />
          <Step label="Finalizar" />
        </Stepper>
      </div>
    </DivContainerHeaderPag2>
  );
};

export default HeaderPag2;
