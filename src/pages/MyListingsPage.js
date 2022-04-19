import { CardList, Listing, Bookmark } from "../pages/ListingPage";
import styled from "styled-components";
import DeleteMessage from "../components/DeleteModal";
import { useState } from "react";

export default function MyListingsPage({
  data,
  handleBookmarkClick,
  onDeleteListing,
}) {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <CardList>
      {data.map((listing) => (
        <Listing key={listing.id}>
          <h2>{listing["realestates.apartmentRent"].title}.</h2>
          <Bookmark
            active={listing.isBookmarked}
            onClick={() => handleBookmarkClick(listing.id)}
          >
            bookmark
          </Bookmark>
          <DeleteButton onClick={() => setShowMessage(true)}>
            Delete
          </DeleteButton>
          {showMessage && (
            <DeleteMessage
              onConfirmDelete={() => onDeleteListing(listing.id)}
              onCancelDelete={() => setShowMessage(false)}
            />
          )}

          <p>{listing["realestates.apartmentRent"].address.postcode}</p>
          <p>{listing.baseRent}</p>
          <p>{listing.livingSpace}</p>
        </Listing>
      ))}
    </CardList>
  );
}

const DeleteButton = styled.button`
  position: absolute;

  right: 25px;
  bottom: 5px;
  background-color: transparent;
  border: transparent;
`;

export { DeleteButton };
