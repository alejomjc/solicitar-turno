/* eslint-disable eqeqeq */
import React from "react";
import styled from "styled-components";
// import SearchIcon from "@mui/icons-material/Search";

export const DivSearcher = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  min-height: 35px;
  border-radius: 25px;
  margin: 0 auto;
  padding: 5px 24px;
  background-color: #dfe7ec;
  border: 1px solid grey;
`;

export const InputSearcher = styled.input`
  border: none;
  background-color: #dfe7ec;
  outline: none;
  height: 30px;
  width: 100%;
  color: black;
`;

const Seacher = (props) => {
  const { handleSearch, busqueda } = props;
  return (
    <DivSearcher>
      {/* <SearchIcon /> */}
      <InputSearcher
        type="text"
        placeholder="Buscador de Artículos"
        onChange={handleSearch}
        value={busqueda}
      />
    </DivSearcher>
  );
};

export default Seacher;
