import styled from "styled-components";
import { DeleteButton } from "./MyListingsPage";
import { GrBookmark } from "react-icons/gr";
import { GrTrash } from "react-icons/gr";
import DeleteMessage from "../components/DeleteModal";
import { useState } from "react";

export default function ListingPage({
  areaCode,
  handleBookmarkClick,
  data,
  onDeleteListing,
}) {
  const [showMessage, setShowMessage] = useState(false);
  const filteredListings = data.filter(
    (listing) =>
      listing["realestates.apartmentRent"].address.postcode === areaCode
  );

  return (
    <CardList>
      {filteredListings.length > 0 ? (
        filteredListings.map((listing) => {
          return (
            <Listing key={listing.id}>
              <img
                src={
                  listing["realestates.apartmentRent"].attachments[0][
                    "@xlink.href"
                  ]
                }
                alt="attachment here"
                width="150"
                height="200"
              />
              <ul>
                <h3>{listing["realestates.apartmentRent"].title}</h3>

                <Bookmark
                  active={listing.isBookmarked}
                  onClick={() => handleBookmarkClick(listing.id)}
                >
                  <GrBookmark />
                </Bookmark>
                <DeleteButton onClick={() => setShowMessage(true)}>
                  <GrTrash />
                </DeleteButton>
                {showMessage && (
                  <DeleteMessage
                    onConfirmDelete={() => onDeleteListing(listing.id)}
                    onCancelDelete={() => setShowMessage(false)}
                  />
                )}
                <p>
                  {listing["realestates.apartmentRent"].address.postcode}{" "}
                  {listing["realestates.apartmentRent"].address.city}
                </p>

                <p>Base rent: {listing.baseRent} € </p>
                <p>Living space: {listing.livingSpace} m2</p>
              </ul>
            </Listing>
          );
        })
      ) : (
        <p>Unfortunately, there are no matches. Please try again!</p>
      )}
    </CardList>
  );
}

const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  list-style: none;
  padding: 0;
  width: 100%; ;
`;

const Listing = styled.li`
  display: grid;
  grid-template-columns: auto auto;
  gap: 5px;

  background: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  height: auto;
  width: auto;
  border-radius: 8px;
  position: relative;
  padding: 8px;
`;

const Bookmark = styled.button`
  position: absolute;

  background: transparent;
  border: none;
  right: 25px;
  top: 5px;
  background-color: ${({ active }) => (active ? "lightblue" : "transparent")};
`;

export { CardList, Listing, Bookmark };
