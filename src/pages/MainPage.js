import styled from "styled-components";
import List from "../components/List/List";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";

const Title = styled.h1`
  color: magenta;
  font-size: 26px;
`;

const MainPage = () => {
  const navigate = useNavigate();
  const goForm = () => {
    navigate(`/robots/create`);
  };

  return (
    <>
      <div className="container">
        <Title>Robots List</Title>
        <Button text={"Create"} actionOnClick={goForm} />
        <List />
      </div>
    </>
  );
};

export default MainPage;
