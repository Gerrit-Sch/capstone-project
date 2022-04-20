import styled from "styled-components";

export default function Input({ handleOnChange }) {
  return (
    <InputStyled
      name="areaCode"
      id="areaCode"
      type="text"
      inputmode="numeric"
      placeholder="Insert 5-digit area code"
      onChange={handleOnChange}
      maxlength="5"
      required
    />
  );
}

const InputStyled = styled.input`
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
