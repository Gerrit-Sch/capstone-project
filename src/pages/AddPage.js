import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AddPage({ onCreateListing }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  function handleOnChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  console.log(formData);

  function handleSubmit(event) {
    event.preventDefault();
    onCreateListing(formData);

    navigate("/mylistings");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        <input
          name="title"
          id="title"
          placeholder="Add a title for your listing"
          onChange={handleOnChange}
          required
        />
      </label>

      <label htmlFor="baseRent">
        <input
          name="baseRent"
          id="baseRent"
          placeholder="Insert the base rent"
          onChange={handleOnChange}
          required
        />
      </label>

      <label htmlFor="postcode">
        <input
          id="postcode"
          maxLength="5"
          name="postcode"
          type="number"
          placeholder="Insert 5-digit area code"
          onChange={handleOnChange}
        />
      </label>

      <label htmlFor="livingSpace">
        <input
          id="livingSpace"
          name="livingSpace"
          type="number"
          placeholder="e.g 80.25"
          onChange={handleOnChange}
          required
        />
      </label>

      <button>Create my listing</button>
    </form>
  );
}
