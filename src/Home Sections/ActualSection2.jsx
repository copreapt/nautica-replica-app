import React from 'react'

const ActualSection2 = () => {
  return (
    <section className="mt-20 lg:mt-10 mx-4 overflow-auto lg:mx-[3.3rem]">
      <h1 className="font-bold text-2xl lg:hidden">OUR WATER SPORTS BRAND</h1>
      {/* img container */}
      <div className="mt-10 overflow-x-auto lg:h-[33.8rem] space-x-4 flex w-max">
        {/* img */}
        <div className="lg:flex lg:flex-col lg:hover:text-red-500">
          <div className="w-screen lg:w-96 lg:overflow-hidden flex flex-col">
            <img
              src="https://nauticaereso.com/wp-content/uploads/2023/03/Amanda-Akesson-_DSC1174-768x1024.jpeg"
              alt="image"
              className="w-[100%] lg:hover:scale-110 lg:hover:cursor-pointer ease-in-out duration-200"
            />
            {/* H1 FOR MOBILE VERSION */}
            <h1 className="font-bold text-xl lg:hidden">Beauchat</h1>
          </div>
          {/* H1 FOR DESKTOP VERSION */}
          <h1 className="font-bold text-xl hidden lg:block">Beauchat</h1>
        </div>
        {/* 2nd img */}
        <div className="lg:flex lg:flex-col lg:hover:text-red-500 lg:justify-end grid content-end">
          <div className="w-screen lg:overflow-hidden lg:w-96">
            <img
              src="https://nauticaereso.com/wp-content/uploads/2023/02/img-actual-11.jpg"
              alt="image"
              className="w-[100%] lg:hover:scale-110 lg:hover:cursor-pointer ease-in-out duration-200"
            />
            {/* H1 FOR MOBILE VERSION */}
            <h1 className="font-bold text-xl lg:hidden">Jobe</h1>
          </div>
          {/* H1 FOR DESKTOP VERSION */}
          <h1 className="font-bold text-xl hidden lg:block">Jobe</h1>
        </div>
        {/* 3rd img */}
        <figure className="lg:flex lg:flex-col lg:hover:text-red-500 lg:justify-end grid content-end">
          <div className="w-screen grid content-end lg:w-96 lg:overflow-hidden">
            <img
              src="https://nauticaereso.com/wp-content/uploads/2023/02/Helly-Hansen-1-1024x810.jpg"
              alt="image"
              className="w-[100%] lg:hover:scale-110 lg:hover:cursor-pointer ease-in-out duration-200"
            />
          </div>
          <figcaption>
            <h1 className="font-bold text-xl">Helly Hansen</h1>
          </figcaption>
        </figure>
        {/* 4th photo */}
        <figure className="lg:flex lg:flex-col lg:hover:text-red-500 lg:justify-end grid content-end">
          <div className="w-screen grid content-end lg:w-96 lg:overflow-hidden">
            <img
              src="https://nauticaereso.com/wp-content/uploads/2023/02/2-1024x1024.png"
              alt="image"
              className="w-[100%] lg:hover:scale-110 lg:hover:cursor-pointer ease-in-out duration-200"
            />
          </div>
          <figcaption>
            <h1 className="font-bold text-xl">Cressi</h1>
          </figcaption>
        </figure>
        {/* 5th photo */}
        <figure className="lg:flex lg:flex-col lg:hover:text-red-500 lg:justify-end grid content-end">
          <div className="w-screen grid content-end lg:w-96 lg:overflow-hidden">
            <img
              src="https://nauticaereso.com/wp-content/uploads/2023/02/img-actual-08.jpg"
              alt="image"
              className="w-[100%] lg:hover:scale-110 lg:hover:cursor-pointer ease-in-out duration-200"
            />
          </div>
          <figcaption>
            <h1 className="font-bold text-xl">Flite</h1>
          </figcaption>
        </figure>
        {/*  */}
      </div>
    </section>
  );
}

export default ActualSection2