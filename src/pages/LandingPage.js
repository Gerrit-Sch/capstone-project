import styled from "styled-components";
import { useState } from "react";

export default function LandingPage({ onSubmit }) {
  const [areaCode, setAreaCode] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputElement = form.elements["areaCode"];
    onSubmit(inputElement.value);
    form.reset();
  }

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setAreaCode({
      ...areaCode,
      [name]: value,
    });
    console.log(areaCode);
  };

  return (
    <Form
      autoComplete="off"
      aria-label="entry-form-area-code"
      onSubmit={handleSubmit}
    >
      <label htmlFor="areaCode"></label>
      <Input
        name="areaCode"
        id="areaCode"
        type="text"
        inputmode="numeric"
        placeholder="Insert 5-digit area code"
        onChange={handleOnChange}
        required
      />
      <Button>Find a place to live!</Button>
    </Form>
  );
}

const Input = styled.input`
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  outline: none;

  :focus {
    border-bottom: 2px solid black;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Button = styled.button`
  height: 30px;
  margin: 30px;
  border: none;
  border-radius: 8px;
`;
