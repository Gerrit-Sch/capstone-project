import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function AddPage({ onCreateListing }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
        />
      </label>

      <label htmlFor="baseRent">
        <input
          name="baseRent"
          id="baseRent"
          placeholder="Insert the base rent"
          onChange={handleOnChange}
        />
      </label>

      <label htmlFor="areaCodeForm">
        <input
          id="areaCodeForm"
          maxLength="5"
          name="areaCodeForm"
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
        />
      </label>

      <label htmlFor="description">
        <input
          id="description"
          placeholder="Any further info you would like to share?"
          type="text"
          name="description"
          maxLength="500"
          onChange={handleOnChange}
        />
      </label>

      <button>Create my listing</button>
    </form>
  );
}
