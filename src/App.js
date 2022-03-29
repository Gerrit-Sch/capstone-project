import styled from "styled-components";
import LandingPage from "./pages/LandingPage";
import { useState } from "react";

export default function App() {
  const [areaCode, setAreaCode] = useState("");
  return (
    <AppContainer>
      <h1> SuperRentalHomes </h1>
      <LandingPage onSubmit={handleAreaCodeInput} />
    </AppContainer>
  );
  function handleAreaCodeInput(areaCode) {
    setAreaCode(areaCode);
  }
}

const AppContainer = styled.div`
  display: grid;
  place-items: center;
  align-content: start;
  gap: 20px;
  min-height: 100vh;
  padding: 20px;
  background-color: orange;
`;
