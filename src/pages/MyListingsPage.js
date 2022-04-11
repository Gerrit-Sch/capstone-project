import { CardList, Listing, Bookmark } from "../pages/ListingPage";
import { nanoid } from "nanoid";

export default function MyListingsPage(
  { createdListings },
  handleBookmarkClick,
  isBookmarked
) {
  return (
    <CardList>
      {createdListings.map((item, id) => (
        <Listing isBookmarked={isBookmarked} key={id}>
          <h2>{item.title}.</h2>
          <Bookmark
            active={item.isBookmarked}
            onClick={() => handleBookmarkClick(item.id)}
          >
            bookmark
          </Bookmark>
          <p>{item.areaCodeForm}</p>
          <p>{item.baseRent}</p>
          <p>{item.livingSpace}</p>
          <p>{item.description}</p>
        </Listing>
      ))}
    </CardList>
  );
}
