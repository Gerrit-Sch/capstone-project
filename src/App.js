import styled from "styled-components";
import LandingPage from "./pages/LandingPage";
import ListingPage from "./pages/ListingPage";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import sampleData from "./assets/Data";
import { nanoid } from "nanoid";
import BookmarkPage from "./pages/BookmarkPage";

const updatedData = sampleData.map((listing) => {
  return { ...listing, isBookmarked: false, id: nanoid() };
});

export default function App() {
  const [areaCode, setAreaCode] = useState("");
  const [data, setData] = useState(updatedData);

  return (
    <AppContainer>
      <h1> SuperRentalHomes </h1>
      <Routes>
        <Route
          path="/"
          element={<LandingPage onSubmit={handleAreaCodeInput} />}
        />
        <Route
          path="/listings"
          element={
            <ListingPage
              areaCode={areaCode}
              handleBookmarkClick={toggleBookmark}
              data={data}
            />
          }
        />
        <Route
          path="/bookmarked"
          element={
            <BookmarkPage data={data} handleBookmarkClick={toggleBookmark} />
          }
        />
      </Routes>
      <footer>
        <nav>
          <Link to="/">
            <i className="fa fa-search"></i>
          </Link>

          <Link to="bookmarked/">
            <i className="fa fa-bookmark"></i>
          </Link>

          <Link to="/listings">
            <i className="fa fa-home"></i>
          </Link>
        </nav>
      </footer>
    </AppContainer>
  );
  function handleAreaCodeInput(areaCode) {
    setAreaCode(areaCode);
  }
  function toggleBookmark(id) {
    setData(
      data.map((listing) => {
        if (listing.id === id) {
          return { ...listing, isBookmarked: !listing.isBookmarked };
        }
        return listing;
      })
    );
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
