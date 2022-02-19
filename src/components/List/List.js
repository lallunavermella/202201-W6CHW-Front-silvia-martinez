import Robot from "../Robot/Robot";
import styled from "styled-components";

const ListStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`;

const List = () => {
  return (
    <ListStyled>
      {robots.map((robot) => (
        <Robot
          nombre={robot.nombre}
          imagen={robot.imagen}
          velocidad={robot.velocidad}
          resistencia={robot.resistencia}
          creacion={robot.creacion}
        />
      ))}
    </ListStyled>
  );
};

export default List;
