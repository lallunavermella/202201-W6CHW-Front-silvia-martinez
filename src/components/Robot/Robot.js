import styled from "styled-components";

const RobotCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1a659e;
  flex-wrap: wrap;
  margin: 10px;
  border-radius: 25px;
  border: 3px solid grey;
  width: 380px;
  img {
    height: 120px;
  }
`;

const Nombre = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #ff6b35;
`;

const Caracteristicas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f7c59f;
  font-size: 15px;
`;

const Robot = ({
  robot: {
    name,
    image,
    caractheristics: { velocity, resistence, creation },
  },
}) => {
  return (
    <>
      <RobotCard>
        <Nombre>{name}</Nombre>
        <img src={image} alt="imagen robot" />
        <Caracteristicas>
          <p>Velocidad:{velocity}</p>
          <p>Resistencia:{resistence}</p>
          <p>Fecha de creacion:{creation}</p>
        </Caracteristicas>
      </RobotCard>
    </>
  );
};

export default Robot;
