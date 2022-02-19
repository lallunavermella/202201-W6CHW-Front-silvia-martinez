import styled from "styled-components";
import List from "../components/List/List";

const Title = styled.h1`
  color: magenta;
  font-size: 26px;
`;

const MainPage = () => {
  return (
    <>
      <div className="container">
        <Title>Robots</Title>
        <List />
      </div>
    </>
  );
};

export default MainPage;
