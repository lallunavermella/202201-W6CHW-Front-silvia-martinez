import Robot from "../Robot/Robot";
import styled from "styled-components";
import { deleteRobotThunks, loadRobotsThunks } from "../../redux/thunks/thunks";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const ListStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const List = () => {
  const robots = useSelector((state) => state.robots);
  const dispatch = useDispatch();

  const deleteRobot = (id) => {
    dispatch(deleteRobotThunks(id));
  };

  useEffect(() => {
    dispatch(loadRobotsThunks);
  }, [dispatch]);

  return (
    <ListStyled>
      {robots.map((robot) => (
        <Robot
          key={robot.id}
          robot={robot}
          action={() => {
            deleteRobot(robot.id);
          }}
        />
      ))}
    </ListStyled>
  );
};

export default List;
