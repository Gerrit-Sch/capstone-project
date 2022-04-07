import sampleData from "../assets/Data";
import { CardList } from "./ListingPage";
import { Listing } from "./ListingPage";
import { Bookmark } from "./ListingPage";

export default function BookmarkPage() {
  const filteredBookmarkedListings = sampleData.filter(
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
                //onClick={() => handleBookmarkClick(listing.id)}
              >
                bookmark
              </Bookmark>
              <p>
                {listing["realestates.apartmentRent"].address.street}{" "}
                {listing["realestates.apartmentRent"].address.houseNumber}
              </p>

              <p>{listing["realestates.apartmentRent"].address.postcode}</p>
              <p>{listing["realestates.apartmentRent"].address.city}</p>
            </Listing>
          );
        })
      ) : (
        <p>No bookmarked listings yet. Start bookmarking!</p>
      )}
    </CardList>
  );
}
