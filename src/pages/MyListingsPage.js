import { CardList, Listing, Bookmark } from "../pages/ListingPage";
import styled from "styled-components";

export default function MyListingsPage({ data, handleBookmarkClick }) {
  return (
    <CardList>
      {data.map((listing) => (
        <Listing key={listing.id}>
          <h2>{listing.title}.</h2>
          <Bookmark
            active={listing.isBookmarked}
            onClick={() => handleBookmarkClick(listing.id)}
          >
            bookmark
          </Bookmark>
          <DeleteButton>Delete</DeleteButton>
          <p>{listing.postcode}</p>
          <p>{listing.baseRent}</p>
          <p>{listing.livingSpace}</p>
          <p>{listing.description}</p>
        </Listing>
      ))}
    </CardList>
  );
}

const DeleteButton = styled.button`
  position: absolute;
  right: 50px;
  top: 180px;
  background-color: transparent;
`;
