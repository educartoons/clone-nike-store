import { useState } from "react";

import ThumbnailGallery from "../ThumbnailGallery";

export default function ProductGallery(props) {
  const [current, setCurrent] = useState(0);

  const { smallImages, largeImages } = props;

  const handleOnHover = (index) => {
    setCurrent(index);
  };

  const handlePrevImage = () => {
    const newCurrent = current - 1;
    if (newCurrent >= 0) {
      setCurrent(newCurrent);
    }
  };

  const handleNextImage = () => {
    const newCurrent = current + 1;
    if (newCurrent < largeImages.length) {
      setCurrent(newCurrent);
    }
  };

  return (
    <div className="flex">
      <div className="flex-none">
        {smallImages.map((thumbnail, index) => {
          return (
            <ThumbnailGallery
              key={index}
              thumbnail={thumbnail}
              index={index}
              onHover={handleOnHover}
              current={current}
            />
          );
        })}
      </div>

      <div className="grow pl-4 pr-10">
        <div className="rounded-lg relative">
          <img className="rounded-lg" src={largeImages[current]} alt="" />
          <div className="absolute top-5 left-5 bg-white px-4 py-2 rounded-full">
            <svg
              className="inline-block -mt-1"
              height="20px"
              width="20px"
              fill="#111"
              viewBox="0 0 25 32"
            >
              <path d="M12.48 4l-3.04 8.96-9.44.32 7.6 5.6L4.96 28l7.68-5.44 7.84 5.28-2.8-9.04 7.52-5.76-9.52-.08z"></path>
            </svg>
            <span className="inline-block ml-1">Highly Rated</span>
          </div>
          <div className="absolute right-5 bottom-5">
            <button
              onClick={handlePrevImage}
              className="py-3 px-3 bg-white rounded-full mr-2"
            >
              <svg
                height="12px"
                width="12px"
                fill="#000"
                viewBox="0 0 185.4 300"
              >
                <path d="M160.4 300c-6.4 0-12.7-2.5-17.7-7.3L0 150 142.7 7.3c9.8-9.8 25.6-9.8 35.4 0 9.8 9.8 9.8 25.6 0 35.4L70.7 150 178 257.3c9.8 9.8 9.8 25.6 0 35.4-4.9 4.8-11.3 7.3-17.6 7.3z"></path>
              </svg>
            </button>
            <button
              onClick={handleNextImage}
              className="py-3 px-3 bg-white rounded-full"
            >
              <svg
                height="12px"
                width="12px"
                fill="#000"
                viewBox="0 0 185.4 300"
              >
                <path d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
