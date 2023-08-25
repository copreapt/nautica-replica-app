import React from 'react'
import { actualSectionImages } from '../utils';

const ActualSection = () => {
  return (
    <section className="mx-4 mt-20 overflow-auto lg:mx-[3.3rem]">
      <div className="sticky left-0">
        <h1 className="font-bold text-xl lg:text-2xl lg:hidden">
          OUR BRANDS OF NAUTICAL EQUIPMENT
        </h1>
      </div>
      {/* images container */}
      <div className="overflow-x-auto flex w-max mt-20 lg:space-x-6">
        {/* img */}
        <div className="w-screen lg:w-96">
          <div>
            <img
              src="https://nauticaereso.com/wp-content/uploads/2023/03/Jabsco-1-1024x810.jpg"
              alt="Jabsco image"
              className="w-[80%] lg:w-full"
            />
          </div>
          <h1 className="font-semibold text-xl lg:text-lg">Jabsco</h1>
        </div>
        {/* rest of images*/}
        {actualSectionImages.map((item,index) => {
          return (
            <div className="w-screen lg:w-96" key={index}>
              <div>
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-[80%] lg:w-full"
                />
              </div>
              <h1 className="font-semibold text-xl lg:text-lg">{item.name}</h1>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ActualSection