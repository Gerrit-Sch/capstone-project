import styled from "styled-components";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <AppContainer>
      <h1> SuperRentalHomes </h1>
      <LandingPage />
    </AppContainer>
  );
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
