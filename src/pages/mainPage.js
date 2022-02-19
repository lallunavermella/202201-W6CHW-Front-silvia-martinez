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
      </div>
    </>
  );
};

export default MainPage;
