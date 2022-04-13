import { CardList, Bookmark, Listing } from "./ListingPage";
import DeleteButton from "./MyListingsPage";

export default function BookmarkPage({
  data,
  handleBookmarkClick,
  onDeleteListing,
}) {
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
                bookmark
              </Bookmark>
              <p>
                {listing["realestates.apartmentRent"].address.street}{" "}
                {listing["realestates.apartmentRent"].address.houseNumber}
              </p>

              <DeleteButton onClick={() => onDeleteListing(listing.id)}>
                Delete
              </DeleteButton>

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
    </CardList>
  );
}
