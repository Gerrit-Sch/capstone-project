import sampleData from "../assets/Data";
import styled from "styled-components";

export default function ListingPage() {
  return (
    <CardList>
      {sampleData.map((listing, index) => (
        <Card key={(index, listing)}>
          <h2>{listing["realestates.apartmentRent"].title}</h2>
          <p>
            {" "}
            {listing["realestates.apartmentRent"].address.street}{" "}
            {listing["realestates.apartmentRent"].address.houseNumber}
          </p>

          <p> {listing["realestates.apartmentRent"].address.postcode}</p>
          <p>{listing["realestates.apartmentRent"].address.city}</p>
        </Card>
      ))}
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

const Card = styled.li`
  background: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  height: auto;
  width: auto;
  border-radius: 8px;
`;
