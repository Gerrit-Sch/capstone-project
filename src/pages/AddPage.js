import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import InputStyled from "./LandingPage";

export default function AddPage({ onCreateListing }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  function handleOnChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  console.log(formData);

  function handleSubmit(event) {
    event.preventDefault();
    onCreateListing(formData);

    navigate("/mylistings");
  }

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <h3>Add your own rental flat!</h3>
        <label htmlFor="title">
          <InputAdd
            name="title"
            id="title"
            placeholder="Add a title for your listing"
            onChange={handleOnChange}
            required
          />
        </label>

        <label htmlFor="baseRent">
          <InputAdd
            name="baseRent"
            id="baseRent"
            placeholder="Insert the base rent"
            onChange={handleOnChange}
            required
          />
          <span>€</span>
        </label>

        <label htmlFor="postcode">
          <InputAdd
            id="postcode"
            maxLength="5"
            name="postcode"
            type="number"
            placeholder="Insert 5-digit area code"
            onChange={handleOnChange}
          />
        </label>

        <label htmlFor="livingSpace">
          <InputAdd
            id="livingSpace"
            name="livingSpace"
            type="number"
            placeholder="e.g 80"
            onChange={handleOnChange}
            required
          />{" "}
          <span>m2</span>
        </label>

        <ButtonAdd>Create my listing</ButtonAdd>
      </FormContainer>
    </>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InputAdd = styled.input`
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  outline: none;
  height: 30px;

  :focus {
    border-bottom: 2px solid black;
  }
`;

const ButtonAdd = styled.button`
  height: 30px;
  margin: 30px;
  border: none;
  border-radius: 8px;
`;
