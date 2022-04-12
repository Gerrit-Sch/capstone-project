import { CardList } from "./ListingPage";
import { Listing } from "./ListingPage";
import { Bookmark } from "./ListingPage";

export default function BookmarkPage({
  data,
  handleBookmarkClick,
  createdListings,
}) {
  const filteredBookmarkedListings = data.filter(
    (listing) => listing.isBookmarked === true
  );

  const filteredBookmarkedCreatedListings = createdListings.filter(
    (item) => item.isBookmarked === true
  );
  return (
    <CardList>
      {filteredBookmarkedListings.length > 0 ? (
        filteredBookmarkedListings.map((listing) => {
          return (
            <Listing key={listing.id}>
              <h2>{listing["realestates.apartmentRent"].title}</h2>
              <Bookmark
                active={listing.isBookmarked}
                onClick={() => handleBookmarkClick(listing.id)}
              >
                bookmark
              </Bookmark>
              <p>
                {listing["realestates.apartmentRent"].address.street}{" "}
                {listing["realestates.apartmentRent"].address.houseNumber}
              </p>

              <p>{listing["realestates.apartmentRent"].address.postcode}</p>
              <p>{listing["realestates.apartmentRent"].address.city}</p>
              <p>Base rent: {listing.baseRent} € </p>
              <p>Living space: {listing.livingSpace}: m2</p>
            </Listing>
          );
        })
      ) : (
        <p>No bookmarked listings yet. Start bookmarking!</p>
      )}

      {filteredBookmarkedListings.length > 0 ? (
        filteredBookmarkedCreatedListings.map((item, index) => (
          <Listing key={index}>
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
        ))
      ) : (
        <p></p>
      )}
    </CardList>
  );
}
