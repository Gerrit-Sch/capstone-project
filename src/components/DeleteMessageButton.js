import styled, { css } from "styled-components";

export default styled.button`
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  cursor: pointer;
  color: #556b2f;
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
      background-color: #c2fbd7;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
      color: #556b2f;
      &:hover {
        background-color: #3d9816;
      }
    `}
  ${(props) =>
    props.variant === "confirm" &&
    css`
      background-color: lightcoral;
      color: #556b2f;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
      &:hover {
        background-color: red;
      }
    `};
`;
