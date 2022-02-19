import List from "../components/List/List";
import styled from "styled-components";

const Title = styled.h1`
  color: magenta;
  font-size: 26px;
`;

const MainPage = () => {
  return (
    <>
      <div className="container">
        <Title>Robots</Title>
        <List></List>
      </div>
    </>
  );
};

export default MainPage;
