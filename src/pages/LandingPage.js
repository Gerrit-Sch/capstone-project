import styled from "styled-components";
import { useState } from "react";
import Button from "../components/Button";
import sampleData from "../assets/Data";
import {Listing} from ListingPage;

import Input from "../components/Input";
import { useNavigate } from "react-router-dom";


export default function LandingPage({ onSubmit }) {
  const [areaCode, setAreaCode] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const postCodeOfListing = sampleData.map((listing) => listing["realestates.apartmentRent"].address.postcode);
    const form = event.target;
    const inputElement = form.elements["areaCode"];
    onSubmit(inputElement.value);
    

    form.reset();

    console.log(
      sampleData.map(
        (listing) => listing["realestates.apartmentRent"].address.postcode
      )
    );
    ;
  
   return(

    inputElement.value === postCodeOfListing
    
      ?  {Listing} && navigate("/listings")
      : <p>"No matches for this area code"</p> && navigate("/listings")

   )
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
    </>
  );
}
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
