import sampleData from "../assets/Data";
import styled from "styled-components";
import { DeleteButton } from "./MyListingsPage";
export default function ListingPage({
  areaCode,
  handleBookmarkClick,
  data,
  onDeleteListing,
}) {
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
              <h2>{listing["realestates.apartmentRent"].title}</h2>
              <Bookmark
                active={listing.isBookmarked}
                onClick={() => handleBookmarkClick(listing.id)}
              >
                bookmark
              </Bookmark>
              <p>{listing["realestates.apartmentRent"].address.postcode}</p>
              <DeleteButton onClick={() => onDeleteListing(listing.id)}>
                Delete
              </DeleteButton>

              <p>Base rent: {listing.baseRent} € </p>
              <p>Living space: {listing.livingSpace} m2</p>
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
  width: 100%;
`;

const Listing = styled.li`
  background: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  height: auto;
  width: auto;
  border-radius: 8px;
  position: relative;
`;

const Bookmark = styled.button`
  position: absolute;
  right: 50px;
  top: -10px;
  background-color: ${({ active }) => (active ? "red" : "transparent")};
`;

export { CardList, Listing, Bookmark };
