import React from 'react'
import { ImCross } from 'react-icons/im';

const PromoSection = () => {
  return (
    <section className="lg:mt-40 lg:sticky lg:mx-4">
      <ImCross className="ml-3 text-3xl text-green-300" />
      {/* images div */}
      <img
        src="https://nauticaereso.com/wp-content/uploads/2023/01/img-promo-01.png"
        alt="yamaha motor"
        className="w-[75%] lg:w-[30%] ml-[10%] hidden lg:block lg:absolute lg:z-10 lg:top-20 lg:right-40"
      />
      <div className="mt-10 mx-10 lg:bg-gray-100 lg:h-[30rem] lg:relative lg:z-0 bottom-10">
        <img
          src="https://nauticaereso.com/wp-content/uploads/2023/01/img-promo-01.png"
          alt="yamaha motor"
          className="w-[75%] lg:w-[30%] ml-[10%] lg:hidden"
        />
        <img
          src="https://nauticaereso.com/wp-content/uploads/2023/01/img-partner-04-1.svg"
          alt="yamaha logo"
          className="mt-5 lg:hidden"
        />
        {/* text div */}
        <div className="mt-4 space-y-4 lg:mt-40 lg:pt-20 lg:ml-20 lg:w-[35%]">
          <div className="font-bold text-xl leading-6">
            <img
              src="https://nauticaereso.com/wp-content/uploads/2023/01/img-partner-04-1.svg"
              alt="yamaha logo"
              className="mt-5 lg:w-[10%] lg:mb-10 hidden lg:block"
            />
            <h1 className="lg:text-3xl">
              Official Distributor <br className="lg:hidden" /> and Technical{" "}
              <br className="hidden lg:flex" /> Service in Ibiza
            </h1>
          </div>
          <p className="text-xl lg:text-base leading-6">
            All our boats have been powered since 1994 by Yamaha outboard
            engines.
          </p>
          <button className="bg-black p-1 text-white w-[25%] text-sm hidden lg:block lg:hover:bg-red-500 ease-in-out duration-200">
            SEE ENGINES
          </button>
        </div>
        <button className="bg-black p-3 text-white w-[55%] ml-[22%] mb-[10%] mt-[10%] lg:hidden">
          SEE ENGINES
        </button>
      </div>
    </section>
  );
}

export default PromoSection