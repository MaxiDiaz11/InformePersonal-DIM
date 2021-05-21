import React from "react";
import styled from "styled-components";

const Titulo = ({ titulo }) => {
  const Titulo = styled.h1`
    font-size: 55px;
    text-align: center;
    margin-top: 25px;
  `;

  return <Titulo className="display-1">{titulo}</Titulo>;
};

export default Titulo;
