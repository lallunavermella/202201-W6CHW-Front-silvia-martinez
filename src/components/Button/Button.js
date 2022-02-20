import styled from "styled-components";

const ButtonTxt = styled.button`
  background-color: #7dcfb6;
  border-color: #fbd1a2;
  color: white;
  border-radius: 4px;
  width: 65px;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding: 4px 8px 4px 6px;
`;

const ButtonText = ({ actionOnClick }) => {
  return (
    <ButtonTxt type="button" onClick={actionOnClick}>
      Delete
    </ButtonTxt>
  );
};

export default ButtonText;
