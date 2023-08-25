import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';

const NewsSection = () => {
  return (
    <section className="ml-4 mt-40 overflow-auto lg:mx-[3.3rem]">
      <h1 className="font-semibold text-2xl mb-3 lg:mb-10">NEWS</h1>
      <div className="border-b-2 border-t-2 lg:border-b lg:border-t border-gray-600 flex w-max lg:w-full overflow-x-auto lg:h-[46rem] lg:overflow-hidden">
        {/* left div */}
        <div className="space-y-4 w-96 lg:w-[80%] mt-2 mb-2 pl-3 mr-2 lg:basis-1/3 lg:hover:text-red-500 ease-in-out duration-300 lg:grayscale lg:hover:grayscale-0">
          <div className="text-xl lg:text-2xl lg:font-bold font-semibold">
            <h1>
              New Beuchat 2023 <br className="lg:hidden" />
              collection: scuba diving and <br className="lg:hidden" />
              spearFishing equipment
            </h1>
          </div>
          <div className="lg:leading-5">
            <p>
              The new Beuchat collection is now available at Ereso, a brand
              synonymous with innovation and comfort that seeks the best
              underwater experience. Do you want to know what's new?
            </p>
            <figure className="mt-4 mb-2">
              <figcaption className="text-right font-semibold mb-2">
                13.03.2023
              </figcaption>
              <div>
                <img
                  src="https://nauticaereso.com/wp-content/uploads/2023/03/Amanda-Akesson-_DSC1174-768x1024.jpeg"
                  alt="image"
                  className="lg:h-[33rem] lg:w-full"
                />
              </div>
            </figure>
          </div>
        </div>
        {/* mid div */}
        <div className="mt-2 mb-2 mr-2 pr-5 text-left border-l-2 lg:border-l border-r-2 lg:border-r border-gray-600 w-96 lg:w-full flex flex-col justify-between lg:basis-1/3">
          <h1 className="text-2xl lg:text-4xl font-bold ml-3">
            "We pay great attention to the finishes of our suits so that they
            play an essential role in their thermal protection, comfort and
            durability."
          </h1>
          <div className="flex justify-between">
            <div className="flex space-x-1 items-center pb-3 pl-3">
              <AiOutlineInstagram />
              <p>@nauticaereso</p>
            </div>
            <p>13.03.23</p>
          </div>
        </div>
        {/* right div */}
        <div className="w-96 mt-2 pr-2 grid lg:w-full lg:basis-1/3 lg:hover:text-red-500 ease-in-out duration-300 lg:grayscale lg:hover:grayscale-0">
          <div className="text-xl lg:text-2xl font-semibold">
            <h1 className="lg:text-2xl lg:font-bold">Our boats in stock!</h1>
          </div>
          <p className="mt-4 lg:leading-5">
            Our ship-showroom in Ibiza is a space for the available boats,
            already motorized and equipped with everything you need to go out to
            sea. Come and choose yours.
          </p>

          <figure className="mt-[40%] lg:mt-8  w-full mb-2">
            <figcaption className="text-right font-semibold mb-2">
              6.03.2022
            </figcaption>
            <div className="">
              <img
                src="https://nauticaereso.com/wp-content/uploads/2023/04/Cap-Camarat-10.5-WA-s2-2-1024x507.jpeg"
                alt="image"
                className="h-96 lg:w-full lg:h-[33rem]"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default NewsSection