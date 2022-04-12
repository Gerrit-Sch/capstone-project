import { CardList, Listing, Bookmark } from "../pages/ListingPage";

export default function MyListingsPage({
  createdListings,
  handleBookmarkClick,
}) {
  return (
    <CardList>
      {createdListings.map((item) => (
        <Listing key={item._id}>
          <h2>{item.title}.</h2>
          <Bookmark
            active={item.isBookmarked}
            onClick={() => handleBookmarkClick(item._id)}
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
