import React from 'react'
import { BsFillEnvelopeFill } from 'react-icons/bs';

const ContactSection = () => {
  return (
    <section className="h-96 lg:h-[40rem]  mt-10 mb-10 mx-4 flex flex-col items-center justify-center space-y-7 lg:text-center relative lg:relative">
      <img
        src="https://nauticaereso.com/wp-content/themes/ereso/images/ico-decor-flag-red.svg"
        alt="image"
        className="top-20 left-80 absolute"
      />
      <img
        src="https://nauticaereso.com/wp-content/themes/ereso/images/ico-decor-cross-green.svg"
        alt="image"
        className="absolute top-80 right-40"
      />
      <img
        src="https://nauticaereso.com/wp-content/themes/ereso/images/ico-decor-square-in-square-green.svg"
        alt="image"
        className="absolute top-40 right-80"
      />
      <img
        src="https://nauticaereso.com/wp-content/themes/ereso/images/ico-decor-chess-2x2-red.svg"
        alt="image"
        className="absolute top-2 left-40 lg:top-50 lg:left-40 "
      />
      <img
        src="https://nauticaereso.com/wp-content/themes/ereso/images/ico-decor-burger-red.svg"
        alt="image"
        className="absolute bottom-20 left-80"
      />
      <h1 className="text-xl lg:text-3xl font-bold w-[80%] uppercase lg:normal-case lg:pb-4 ">
        Contact us to learn more
      </h1>
      <button className="bg-black p-3 lg:p-2 lg:text-sm lg:w-[10%] w-[50%] flex space-x-5 justify-center items-center text-white lg:hover:bg-red-500 ease-in-out duration-200">
        <BsFillEnvelopeFill className="text-2xl" />
        <h1>CONTACT</h1>
      </button>
    </section>
  );
}

export default ContactSection