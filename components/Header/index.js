import React from 'react';
import restaurantImg from "../../public/restaurantSvg.svg";
import Image from 'next/image';

const Header = () => {
  return (
    <div className="bg-blue-100">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 py-16 mx-auto">
        {/* Text about the company */}
        <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left mb-10 md:mb-0">
          <h1 className="my-4 text-4xl font-bold leading-tight text-gray-900">
            Welcome to our restaurant ordering system!
          </h1>
          <p className="leading-normal text-xl mb-8">
            Craving a delicious meal that's quick and convenient? Look no further than our fast food restaurant! With a menu full of fan-favorite items like burgers, fries, and chicken, you'll be able to satisfy your hunger in no time. Come by today and experience the speed, affordability, and convenience of our restaurant!
          </p>
        </div>
        {/* Image of the restaurant */}
        <div className="w-full md:w-1/2 py-6 text-center">
          <Image
            src={restaurantImg}
            alt="Restaurant"
            className="w-full md:w-4/5 mx-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default Header