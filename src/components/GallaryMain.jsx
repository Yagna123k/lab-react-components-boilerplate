import React from "react";

export default function GallaryMain(props) {
  return (
    <div>
      {props.imageData.map((image) => (
        <div key={image.id} className="column">
          <img src={image.img} alt="" />
        </div>
      ))}
    </div>
  );
}