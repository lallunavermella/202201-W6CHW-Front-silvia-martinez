import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button/Button";

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
  justify-content: center;
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
    _id,
    name,
    image,
    caractheristics: { velocity, resistence, creation },
  },
  action,
}) => {
  let navigate = useNavigate();
  const viewDetails = () => {
    navigate(`/robots/${_id}`);
  };

  return (
    <>
      <RobotCard>
        <div onClick={viewDetails}>
          <Nombre>{name}</Nombre>
          <img src={image} alt="imagen robot" />
          <Caracteristicas>
            <p>Velocidad:{velocity}</p>
            <p>Resistencia:{resistence}</p>
            <p>Fecha de creacion:{creation}</p>
          </Caracteristicas>
        </div>
        <Button actionOnClick={action} />
      </RobotCard>
    </>
  );
};

export default Robot;
