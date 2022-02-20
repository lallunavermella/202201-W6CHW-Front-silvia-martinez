import styled from "styled-components";
import Button from "../Button/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createdRobotThunk } from "../../redux/thunks/thunks";

const StyledForm = styled.form`
  width: 100%;
  padding-bottom: 15px;
`;

const StyleLineForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const StyleButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  bottom: 10px;
`;
const StyledInput = styled.input`
  height: 50px;
  border-style: none;
  padding-left: 10px;
  margin-top: 10px;
  border-radius: 5px;

  &[id="description"] {
    height: 200px;
  }

  &:focus {
    outline: 1px solid #f79256;
  }
`;

const Form = () => {
  const dispatch = useDispatch();

  const initialFields = {
    display_name: "",
    profile_image_url: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialFields);

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(createdRobotThunk(formData));
    resetForm();
  };

  const resetForm = () => {
    setFormData(initialFields);
  };

  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <>
      <StyledForm>
        <StyleLineForm onSubmit={onFormSubmit}>
          <FormBlock className="form-block">
            <label htmlFor="display_name">Name:</label>
            <StyledInput
              autoComplete="off"
              type="text"
              id="display_name"
              placeholder="Your Name"
              onChange={changeData}
              value={formData.name}
            />
          </FormBlock>
          <FormBlock className="form-block">
            <label htmlFor="profile_image_url">Image:</label>
            <StyledInput
              autoComplete="off"
              type="imageInput"
              id="profile_image_url"
              placeholder="Your image"
              onChange={changeData}
              value={formData.image}
            />
          </FormBlock>
          <FormBlock className="form-block">
            <label htmlFor="display_speed">Speed:</label>
            <StyledInput
              autoComplete="off"
              type="number"
              min={0}
              max={10}
              id="display_speed"
              placeholder="Speed"
              onChange={changeData}
              value={formData.velocity}
            />
          </FormBlock>
          <FormBlock className="form-block">
            <label htmlFor="display_resistence">Resistence:</label>
            <StyledInput
              autoComplete="off"
              type="number"
              min={0}
              max={10}
              id="display_resistence"
              placeholder="Resistence"
              onChange={changeData}
              value={formData.resistence}
            />
          </FormBlock>
          <FormBlock className="form-block">
            <label htmlFor="display_creation">Creation:</label>
            <StyledInput
              autoComplete="off"
              type="text"
              id="display_creation"
              placeholder="Creation"
              onChange={changeData}
              value={formData.creation}
            />
          </FormBlock>
        </StyleLineForm>
        <StyleButtons>
          <Button type="submit" text={"Create"} actionOnClick={onFormSubmit} />
        </StyleButtons>
      </StyledForm>
    </>
  );
};

export default Form;
