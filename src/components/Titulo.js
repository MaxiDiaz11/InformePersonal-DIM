import React from "react";
import styled from "styled-components";

const Titulo = ({ titulo }) => {
  const Titulo = styled.h1`
    text-align: center;
    margin-top: 25px;
  `;

  return <Titulo className="display-3">{titulo}</Titulo>;
};

export default Titulo;
