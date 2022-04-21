import { CardList, Bookmark, Listing } from "./ListingPage";
import { GrBookmark } from "react-icons/gr";

export default function BookmarkPage({ data, handleBookmarkClick }) {
  const filteredBookmarkedListings = data.filter(
    (listing) => listing.isBookmarked === true
  );

  console.log(filteredBookmarkedListings);

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
                <GrBookmark />
              </Bookmark>

              <p>
                {listing["realestates.apartmentRent"].address.postcode}{" "}
                {listing["realestates.apartmentRent"].address.city}
              </p>

              <p>Base rent: {listing.baseRent} € </p>
              <p>Living space: {listing.livingSpace}: m2</p>
            </Listing>
          );
        })
      ) : (
        <p>No bookmarked listings yet. Start bookmarking!</p>
      )}
    </CardList>
  );
}
