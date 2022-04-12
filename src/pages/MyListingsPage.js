import { CardList, Listing, Bookmark } from "../pages/ListingPage";
import styled from "styled-components";

export default function MyListingsPage({
  createdListings,
  handleBookmarkClick,
}) {
  return (
    <CardList>
      {createdListings.map((item) => (
        <Listing key={item.id}>
          <h2>{item.title}.</h2>
          <Bookmark
            active={item.isBookmarked}
            onClick={() => handleBookmarkClick(item.id)}
          >
            bookmark
          </Bookmark>
          <DeleteButton>Delete</DeleteButton>
          <p>{item.areaCodeForm}</p>
          <p>{item.baseRent}</p>
          <p>{item.livingSpace}</p>
          <p>{item.description}</p>
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
