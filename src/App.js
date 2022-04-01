import styled from "styled-components";
import LandingPage from "./pages/LandingPage";
import ListingPage from "./pages/ListingPage";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [areaCode, setAreaCode] = useState("");
  console.log(areaCode);
  return (
    <AppContainer>
      <h1> SuperRentalHomes </h1>
      <Routes>
        <Route
          path="/"
          element={<LandingPage onSubmit={handleAreaCodeInput} />}
        />
        <Route path="/listings" element={<ListingPage areaCode={areaCode} />} />
      </Routes>
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
