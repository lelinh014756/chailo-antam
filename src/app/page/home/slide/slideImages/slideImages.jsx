import React from "react";
import "./slideImages.scss";

export const SlideImages = ( {products, manualSize, countSlider, manualClick} ) => {
  return (
    <div className="slide__images">
      <div className="slide__images-box">

        {products.map((item, index) => {
          return (
            <div
              key={index}
              className={"slide__image " + (index === countSlider? "active": "")}
              id={`slide__image${index + 1}`}
            >
              <img src={item.img} alt="" />
            </div>
          );
        })}

        <div className="slide__manual">
          {Array.from({ length: manualSize }).map((item, index) => (
            <label
              key={index}
              className={"slide__manual-btn " + (index === countSlider? "active": "")}
              onClick={() => manualClick(index)}
            ></label>
          ))}
        </div>
      </div>
    </div>
  );
};
