import React from 'react'

const AboutSection = () => {
  return (
    <section className="justify-center lg:mx-10">
      <div>
        <div className="pt-[10%] lg:mb-20">
          <h1 className="text-black font-semibold lg:font-bold text-6xl lg:text-[7rem] p-3">
            <span className="lg:block">The nautical</span> Ibiza, since 1925
          </h1>
        </div>
        <div className="lg:flex lg:items-center">
          <div className="hidden lg:block w-full ml-3">
            <img
              src="https://nauticaereso.com/wp-content/uploads/2023/01/img-about-01.jpg"
              alt=""
              className="w-[100%]"
            />
          </div>
          <div className="pt-10 text-xl p-4 space-y-2 leading-6 lg:w-[100%] lg:items-center lg:flex lg:flex-col lg:mb-40 lg:pr-40 lg:space-y-10 lg:font-medium">
            <p className="lg:w-[70%]">
              For almost 100 years we have been selling all types of boats and
              nautical equipment to enjoy the sea: fiberglass boats, semi-rigid
              boats, dinghies or boats, products for the practice of water
              sports, accessories and spare parts.
            </p>
            <p className="lg:w-[70%]">
              For 4 generations we have been dedicated to know the island of
              Ibiza from the sea.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection