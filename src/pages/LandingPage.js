import styled from "styled-components";
import { useState } from "react";
import Button from "../components/Button";
import sampleData from "../assets/Data";
import Input from "../components/Input";
//import useNavigate from "

export default function LandingPage({ onSubmit }) {
  const [areaCode, setAreaCode] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputElement = form.elements["areaCode"];
    onSubmit(inputElement.value);

    form.reset();
    //navigate
  }

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setAreaCode({
      ...areaCode,
      [name]: value,
    });
  };
  console.log(areaCode);

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
          onChange={handleOnChange}
          required
        />
        <Button>Find your place to live!</Button>
      </Form>
      <ul>
        {sampleData.map((listing) => (
          <li>{listing["realestates.apartmentRent"].title}</li>
        ))}
      </ul>
    </>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
