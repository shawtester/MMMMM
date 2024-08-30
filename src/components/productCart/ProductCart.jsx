import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing icons for buttons

const products = [
  // Your product objects here
  
    
  {
    id: 1,
    image: "https://assets.hyugalife.com/catalog/product/h/s/hsjt16l1_12_.jpg?compress=true&format=webp&q=75&w=300&h=300",
    title: "Product 1",
    price: "$15.00",
    description: "This is a brief description of Product 2."
  },
  {
    id: 2,
    image: "https://assets.hyugalife.com/catalog/product/f/o/fop_no_shadow_uf_1kg.jpg?compress=true&format=webp&q=75&w=300&h=300",
    title: "Product 2",
    price: "$20.00",
    description: "This is a brief description of Product 3."
  },
  {
    id: 3,
    image: "https://assets.hyugalife.com/catalog/product/6/1/61lfd8xjpul._sl1500_.jpg?compress=true&format=webp&q=75&w=300&h=300",
    title: "Product 3",
    price: "$25.00",
    description: "This is a brief description of Product 4."
  },
  {
    id: 4,
    image: "https://assets.hyugalife.com/catalog/product/9/0/90200188-1.jpg?compress=true&format=webp&q=75&w=300&h=300",
    title: "Product 4",
    price: "$30.00",
    description: "This is a brief description of Product 5."
  },
  {
    id: 5,
    image: "https://assets.hyugalife.com/catalog/product/f/o/fop_mk_2kg.jpg?compress=true&format=webp&q=75&w=300&h=300",
    title: "Product 5",
    price: "$35.00",
    description: "This is a brief description of Product 6."
  },
  {
      id: 6,
      image: "https://assets.hyugalife.com/catalog/product/h/s/hsjt16l1_12_.jpg?compress=true&format=webp&q=75&w=300&h=300",
      title: "Product 6",
      price: "$15.00",
      description: "This is a brief description of Product 2."
    },
    {
      id: 7,
      image: "https://assets.hyugalife.com/catalog/product/f/o/fop_no_shadow_uf_1kg.jpg?compress=true&format=webp&q=75&w=300&h=300",
      title: "Product 7",
      price: "$20.00",
      description: "This is a brief description of Product 3."
    },
    {
      id: 8,
      image: "https://assets.hyugalife.com/catalog/product/6/1/61lfd8xjpul._sl1500_.jpg?compress=true&format=webp&q=75&w=300&h=300",
      title: "Product 8",
      price: "$25.00",
      description: "This is a brief description of Product 4."
    },
    {
      id: 9,
      image: "https://assets.hyugalife.com/catalog/product/h/s/hsvo17d5-1_1_11zon.jpg?compress=true&format=webp&q=75&w=300&h=300",
      title: "Product 9",
      price: "$30.00",
      description: "This is a brief description of Product 5."
    },
    
];


const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setItemsToShow(2);
    } else if (window.innerWidth < 1024) {
      setItemsToShow(3);
    } else {
      setItemsToShow(4);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - itemsToShow : prevIndex - 1
    );
  };

  const translateXValue = (100 / itemsToShow) * currentIndex;

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 py-8">
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
        <div className="relative w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${translateXValue}%)`,
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 p-4"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div className="border rounded-lg bg-white shadow-md h-full flex flex-col justify-between">
                  <div className="w-full h-40 flex justify-center items-center bg-gray-200 rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-contain h-full"
                    />
                  </div>
                  <div className="p-4 flex-grow">
                    <h2 className="text-lg font-semibold">{product.title}</h2>
                    <p className="text-gray-500">{product.price}</p>
                    <p className="text-gray-700 text-sm mt-2">{product.description}</p>
                  </div>
                  <div className="p-4">
                    <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left Arrow */}
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full focus:outline-none z-10 shadow-lg hover:bg-blue-700 transition"
          onClick={prevSlide}
        >
          <FaArrowLeft className="text-xl" />
        </button>

        {/* Right Arrow */}
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full focus:outline-none z-10 shadow-lg hover:bg-blue-700 transition"
          onClick={nextSlide}
        >
          <FaArrowRight className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
