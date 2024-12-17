import React from "react";
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css"; // Slick styles
import "slick-carousel/slick/slick-theme.css"; // Slick theme styles

const JobSlider = () => {
  const categories = [
    { name: "Marketing & Sale", jobs: 1526, icon: "📢" },
    { name: "Customer Help", jobs: 185, icon: "🎧" },
    { name: "Finance", jobs: 168, icon: "🏛️" },
    { name: "Software", jobs: 1856, icon: "💡" },
    { name: "Human Resource", jobs: 165, icon: "👩‍💼" },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="my-10 px-5 py-10">
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-5 border rounded-lg shadow-md space-y-3" // Tailwind space between elements inside the slide
          >
            <div className="text-4xl">{category.icon}</div>
            <h3 className="text-lg font-bold mt-3">{category.name}</h3>
            <p className="text-sm text-gray-500">
              {category.jobs} Jobs Available
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default JobSlider;
