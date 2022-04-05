import styled from "styled-components";

export default function ListingPage({ areaCode, handleBookmarkClick, data }) {
  const postcodes = data.map(
    (listing) => listing["realestates.apartmentRent"].address.postcode
  );
  const match = postcodes.includes(areaCode);

  return (
    <CardList>
      {data.map((listing) => {
        if (
          listing["realestates.apartmentRent"].address.postcode === areaCode
        ) {
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
      {match ? (
        ""
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
