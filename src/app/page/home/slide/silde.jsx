import { first } from "lodash";
import React, { useState } from "react";
import { useEffect } from "react";
import { SlideContent } from "./slideContent/slideContent";
import { SlideImages } from "./slideImages/slideImages";
import "./Slide.scss";

export const Slide = (props) => {
  const { products, slideSize } = props;

  const productsLength = products.length;

  // get New Products equal slide size
  const newProducts = products.filter(
    (item, index) => index >= productsLength - slideSize
  );

  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (count === slideSize - 1) {
        setCount(0);
      } else setCount(count + 1);
    }, 5000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [count]);

  const HandleNextSlider = (index) => {
    setCount(index);
  };

  return (
    <div className="slide">
      <SlideImages
        products={newProducts}
        manualSize={slideSize}
        countSlider={count}
        manualClick={HandleNextSlider}
      />
      <SlideContent />
    </div>
  );
};
