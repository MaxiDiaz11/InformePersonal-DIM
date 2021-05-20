import React from "react";
import styled from "styled-components";

const Titulo = ({ titulo }) => {
  const Titulo = styled.h1`
    font-size: 40px;
    text-align: center;
    margin-top: 20px;
  `;

  return <Titulo>{titulo}</Titulo>;
};

export default Titulo;
