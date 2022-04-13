import styled from "styled-components";
import LandingPage from "./pages/LandingPage";
import ListingPage from "./pages/ListingPage";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import sampleData from "./assets/Data";
import { nanoid } from "nanoid";
import BookmarkPage from "./pages/BookmarkPage";
import AddPage from "./pages/AddPage";
import MyListingsPage from "./pages/MyListingsPage";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const updatedData = sampleData.map((listing) => {
    return { ...listing, isBookmarked: false, id: nanoid() };
  });
  const [areaCode, setAreaCode] = useState("");
  const [data, setData] = useLocalStorage("updatedData", updatedData);
  const [myListings, setMyListings] = useState([]);

  console.log(data);
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
              onDeleteListing={handleDeleteListing}
            />
          }
        />
        <Route
          path="/bookmarked"
          element={
            <BookmarkPage data={data} handleBookmarkClick={toggleBookmark} />
          }
        />
        <Route
          path="/add"
          element={<AddPage onCreateListing={createNewListing} />}
        />
        <Route
          path="/mylistings"
          element={
            <MyListingsPage
              data={myListings}
              handleBookmarkClick={toggleBookmark}
              onDeleteListing={handleDeleteListing}
            />
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

          <Link to="/add">
            <i className="fa fa-plus"></i>
          </Link>

          <Link to="/mylistings">
            <i className="fa fa-newspaper"></i>
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
    setMyListings(
      myListings.map((myListing) => {
        if (myListing.id === id) {
          return { ...myListing, isBookmarked: !myListing.isBookmarked };
        }
        return myListing;
      })
    );
  }

  function handleDeleteListing(id) {
    setData(data.filter((listing) => listing.id !== id));
    setMyListings(myListings.filter((myListing) => myListing.id !== id));
  }

  function createNewListing(formData) {
    const newListingTest = {
      "realestates.apartmentRent": {
        title: formData.title,
        address: { postcode: formData.postcode },
      },
      baseRent: formData.baseRent,
      livingSpace: formData.livingSpace,
      id: nanoid(),
      isBookmarked: false,
    };
    setData([...data, newListingTest]);
    setMyListings([...myListings, newListingTest]);
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

/* */
