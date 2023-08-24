import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const carouselData = [
  {
    image:
      "https://www.artofliving.org/sites/www.artofliving.org/files/styles/original_image/public/landing_page_uploads/full_carousel/tree%20planting%20hero%20desktop.jpg.webp?itok=5NOzV9qv",
  },
  { image: "https://www.artofliving.org/sites/www.artofliving.org/files/styles/original_image/public/landing_page_uploads/full_carousel/tree%20planting%20hero%20desktop.jpg.webp?itok=5NOzV9qv" },
  {
    image:
       "https://www.artofliving.org/sites/www.artofliving.org/files/styles/original_image/public/landing_page_uploads/full_carousel/tree%20planting%20hero%20desktop.jpg.webp?itok=5NOzV9qv",
  },
  {
    image:
    "https://www.artofliving.org/sites/www.artofliving.org/files/styles/original_image/public/landing_page_uploads/full_carousel/tree%20planting%20hero%20desktop.jpg.webp?itok=5NOzV9qv",
  },
  {
    image:
    "https://www.artofliving.org/sites/www.artofliving.org/files/styles/original_image/public/landing_page_uploads/full_carousel/tree%20planting%20hero%20desktop.jpg.webp?itok=5NOzV9qv",
  },
];

const items = carouselData.map((item) => (
  <img
    className="cursor-pointer"
    role="presentation"
    src={item.image}
    alt=" 😎 "
  />
));

const MainCarousel = () => {
  return (
    <>
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1500}
        infinite
      />
    </>
  );
};

export default MainCarousel;
