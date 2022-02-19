import Robot from "../Robot/Robot";
import styled from "styled-components";
import { loadRobotsThunks } from "../../redux/thunks/thunks";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const ListStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`;

const List = () => {
  const robots = useSelector((state) => state.robots);
  console.log(robots);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsThunks);
  }, [dispatch]);

  return (
    <ListStyled>
      {robots.map((robot) => (
        <Robot key={robot._id} robot={robot} />
      ))}
    </ListStyled>
  );
};

export default List;
