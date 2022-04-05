import { updatedData } from "../App";
import { CardList } from "./ListingPage";
import { Listing } from "./ListingPage";
import { Bookmark } from "./ListingPage";

export default function BookmarkPage({ handleBookmarkClick }) {
  return (
    <CardList>
      {updatedData.map((listing) => {
        if (listing.isBookmarked(true)) {
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
                {" "}
                {listing["realestates.apartmentRent"].address.street}{" "}
                {listing["realestates.apartmentRent"].address.houseNumber}
              </p>

              <p> {listing["realestates.apartmentRent"].address.postcode}</p>
              <p>{listing["realestates.apartmentRent"].address.city}</p>
            </Listing>
          );
        }
      })}
    </CardList>
  );
}
