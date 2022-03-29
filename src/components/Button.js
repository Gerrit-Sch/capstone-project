import styled from "styled-components";

export default function Button() {
  return <ButtonStyled>Find your place to live!</ButtonStyled>;
}

const ButtonStyled = styled.button`
  height: 30px;
  margin: 30px;
  border: none;
  border-radius: 8px;
`;
