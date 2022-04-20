import styled, { css } from "styled-components";

export default styled.button`
  cursor: pointer;

  padding: 10px 20px;
  border-radius: 100%;
  transition-duration: 0.3s;
  color: #fff;
  font-size: 0.8rem;
  width: 50%;
  border: none;
  align-self: center;
  display: flex;
  justify-content: center;
  margin: 0.3rem;
  ${(props) =>
    props.variant === "cancel" &&
    css`
      background-color: none;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      color: #556b2f;
      &:hover {
        background-color: lightblue;
      }
    `}
  ${(props) =>
    props.variant === "confirm" &&
    css`
      background-color: none;
      color: #556b2f;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      &:hover {
        background-color: lightblue;
      }
    `};
`;
