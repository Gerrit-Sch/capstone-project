import React, { useState } from "react";
import axios from "axios";

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function App() {
  const [image, setImage] = useState("");

  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;

    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", PRESET);

    axios
      .post(url, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      })
      .then(onImageSave)
      .catch((err) => console.error(err));
  }

  function onImageSave(response) {
    setImage(response.data.url);
  }

  return (
    <div>
      {image ? (
        <img src={image} alt="" style={{ width: "100%" }} />
      ) : (
        <input type="file" name="file" onChange={upload} />
      )}
    </div>
  );
}
