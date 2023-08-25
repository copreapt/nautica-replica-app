import React from 'react'

const VisualSection = () => {
  return (
    <section
      className="flex justify-center items-center flex-col"
      id="first_section"
    >
      <div className="w-full h-screen lg:h-max bg-[url('https://nauticaereso.com/wp-content/uploads/2023/06/img-visual-2-scaled-1.jpg')] bg-cover bg-center flex flex-col items-center">
        <div className="text-white flex flex-col pt-[10%] w-[40%] lg:w-fit lg:pt-10">
          <img
            src="https://nauticaereso.com/wp-content/uploads/2023/01/logo-large.svg"
            alt="ereso logo"
          />
        </div>
        <h1 className="text-white text-3xl pt-[65%] font-semibold lg:pt-[11%] lg:text-5xl lg:font-bold">
          Sail your own boat
        </h1>
        <h1 className="sm:pt-[65%]"></h1>
      </div>
    </section>
  );
}

export default VisualSection