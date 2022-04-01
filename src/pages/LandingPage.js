import styled from "styled-components";
import { useState } from "react";
import Button from "../components/Button";
import sampleData from "../assets/Data";

import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

export default function LandingPage({ onSubmit }) {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const inputElement = form.elements["areaCode"];

    onSubmit(inputElement.value);

    form.reset();
    navigate("/listings");
  }

  return (
    <>
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
          onChange={(event) => console.log(event.target.value)}
          required
        />
        <Button>Find your place to live!</Button>
      </Form>
    </>
  );
}
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
