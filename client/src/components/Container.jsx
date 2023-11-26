import React from "react";
import styled from "styled-components";
import Star from "../assets/star.png"

const Contenedor = styled.article`
  background-color: #ffffff;
  height: 200px;
  min-width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  border: none;
  box-shadow: 2px 2px 5px 2px #00000045;
  /* border-radius: 20px; */
  padding: 15px 30px;
  margin: 25px;
  box-sizing: border-box;

  transition: transform 0.7s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Imagen = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-right: 25px;
`;

const Nombre = styled.p`
  font-family: Oswald;
  text-align: center;
`;

const Texto = styled.p`
  text-align: justify;
  font-size: 12px;
  margin: 5px;
  font-family: Urbanist;
`;

const FinalCard = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  text-align: left;
`;

const Estrella = styled.img`
  height: 15px;
  width: 15px;
  margin: 2px;
`;

const Calificacion = styled.div`
  display: flex;
`
export const Container = ({ titulo, img, comentario }) => {
  return (
    <Contenedor>
      <Texto>{comentario}</Texto>
      <FinalCard>
        <Imagen src={img} alt="persona" />
        <Nombre>
          {titulo}
          <Calificacion>
          <Estrella src={Star} />
          <Estrella src={Star} />
          <Estrella src={Star} />
          <Estrella src={Star} />
          <Estrella src={Star} />
          </Calificacion>
        </Nombre>
      </FinalCard>
    </Contenedor>
  );
};
