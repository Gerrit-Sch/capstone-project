import styled from "styled-components";
import LandingPage from "./pages/LandingPage";
import ListingPage from "./pages/ListingPage";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import sampleData from "./assets/Data";
import { nanoid } from "nanoid";
import BookmarkPage from "./pages/BookmarkPage";
import AddPage from "./pages/AddPage";
import MyListingsPage from "./pages/MyListingsPage";
import useLocalStorage from "./hooks/useLocalStorage";
import image from "./img/joel2.jpg";
import Navigation from "./components/Navigation";
import UploadTest from "./pages/UploadTest";

export default function App() {
  const updatedData = sampleData.map((listing) => {
    return { ...listing, isBookmarked: false, id: nanoid() };
  });
  const [areaCode, setAreaCode] = useState("");
  const [data, setData] = useLocalStorage("updatedData", updatedData);
  const [myListings, setMyListings] = useLocalStorage("data", []);

  return (
    <AppContainer
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
    >
      <h1> RentalHomes </h1>
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
        <Route path="/upload" element={<UploadTest />} />
      </Routes>
      <Navigation />
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
        address: { postcode: formData.postcode, city: formData.city },
        attachments: [{ "@xlink.href": formData.image }],
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
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
