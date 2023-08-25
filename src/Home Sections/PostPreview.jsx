import React from 'react'

const PostPreview = () => {
  return (
    <section className="mx-4 lg:mx-[3.3rem] mt-40 lg:flex lg:flex-col">
      <div className="mb-20">
        <h1 className="font-semibold text-6xl lg:text-[7.50rem] lg:w-[60%]">
          Equip your boat
        </h1>
      </div>
      <div className="lg:flex lg:flex-row-reverse">
        <img
          src="https://nauticaereso.com/wp-content/uploads/2023/01/img-post-01.jpg"
          alt="photo"
          className="mt- lg:w-[100%]"
        />
        <div className="mt-10 lg:flex lg:flex-col lg:items-center lg:mt-40">
          <div className="space-y-4 lg:w-[50%]">
            <h1 className="text-2xl lg:text-3xl font-semibold uppercase lg:normal-case">
              Nautical equipment
            </h1>
            <div className="space-y-3 lg:space-y-7">
              <p className="text-xl lg:text-2xl font-semibold lg:font-light leading-6 lg:leading-5">
                Náutica Ereso is the company with the longest nautical tradition
                on the island, a place where you can find everything you need to
                enjoy the sea of Ibiza sailing: from pleasure boats to engines
                of all powers or spare parts for nautical equipment, household
                items for life on deck or textiles to renew the aesthetics of
                your boat.
              </p>
              <p className="text-xl lg:text-2xl lg:leading-5 font-semibold lg:font-light leading-6">
                Come if you need accessories for navigation: electronic
                equipment, radio, plotters, gps, spare parts for the engine,
                cleaning and maintenance products, textiles and nautical
                utensils, accessories or anything you need to enjoy life on a
                boat in Ibiza.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostPreview