import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import {TbMinusVertical} from 'react-icons/tb'

const PopularSection = () => {

  const [openSubMenu, setOpenSubMenu] = useState(false)

  return (
    <section className=" overflow-auto lg:ml-10">
      <h1 className="font-semibold text-2xl mt-4 ml-4 lg:hidden">
        Featured vessels
      </h1>
      {/* images container */}
      <div className="flex overflow-x-auto h-[28rem] w-fit lg:h-screen lg:w-max relative z-10">
        {/* img container */}
        <div className="flex flex-col w-fit lg:w-[35rem] pr-6">
          <div className="flex flex-col h-full w-[calc(100vw-3rem)] lg:w-[100%] lg:h-[70%] bg-[url('https://nauticaereso.com/wp-content/uploads/2023/03/Jeanneau-Cap-Camarat-105-WA-Serie-2-stock-en-Ibiza-scaled.jpg')] bg-cover bg-center mt-5 items-center rounded-r-[50%] lg:hover:rounded-r-[0%] ease-in-out duration-200 mr-4 pr-10 ml-4 hover:cursor-pointer">
          </div>
          <div className="flex ml-4 lg:justify-between">
            <h1 className="font-bold text-2xl lg:text-xl lg:font-semibold w-[50%] lg:mt-2">
              Jeanneau Cap Camarat 9.0 CC
            </h1>
            <div className="flex flex-col ml-6">
              <div className="text-right">
                <span className="text-sm">From</span>
              </div>
              <div className="font-semibold">
                <p>166.550 E (VAT incl.)</p>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd image */}
        <div className="flex flex-col w-fit lg:w-[35rem] pr-6">
          <div className="flex flex-col h-full w-[calc(100vw-3rem)] lg:w-[100%] lg:h-[70%] bg-[url('https://nauticaereso.com/wp-content/uploads/2023/03/Jeanneau-Cap-Camarat-90-WA-embarcacion-nueva-stock-Ibiza-scaled.jpg')] bg-cover bg-center mt-5 items-center rounded-r-[50%] lg:hover:rounded-r-[0%] ease-in-out duration-200 mr-4 pr-10 ml-4 hover:cursor-pointer">
            
          </div>
          <div className="flex ml-4 lg:justify-between">
            <h1 className="font-bold text-2xl w-[50%] lg:text-xl lg:font-semibold">
              Jeanneau Cap Camarat 9.0 CC
            </h1>
            <div className="flex flex-col">
              <div className="text-right">
                <span className="text-sm">From</span>
              </div>
              <div className="font-semibold">
                <p>166.550 E (VAT incl.)</p>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd image */}
        <div className="flex flex-col w-fit lg:w-[35rem] lg:h-[36.5rem] pr-6">
          <div className="flex flex-col h-full lg:w-full w-[calc(100vw-3rem)] bg-[url('https://nauticaereso.com/wp-content/uploads/2023/03/jeanneau-cap-camarat-75-wa-serie-3-comprar-barco-Ibiza-scaled.jpg')] bg-cover bg-center mt-5 items-center rounded-r-[50%] lg:hover:rounded-r-[0%] ease-in-out duration-200 mr-4 pr-10 ml-4 hover:cursor-pointer">          </div>
          <div className="flex ml-4 lg:justify-between">
            <h1 className="font-bold text-2xl w-[50%] lg:text-xl lg:font-semibold">
              Jeanneau Cap Camarat 9.0 CC
            </h1>
            <div className="flex flex-col">
              <div className="text-right">
                <span className="text-sm">From</span>
              </div>
              <div className="font-semibold">
                <p>166.550 E (VAT incl.)</p>
              </div>
            </div>
          </div>
        </div>
        {/* 4th image */}
        <div className="flex flex-col w-fit lg:w-[35rem] pr-6">
          <div className="flex flex-col h-full w-[calc(100vw-3rem)] lg:w-[100%] lg:h-[70%] bg-[url('https://nauticaereso.com/wp-content/uploads/2023/03/Jeanneau-Cap-Camarat-105-WA-Serie-2-stock-en-Ibiza-scaled.jpg')] bg-cover bg-center mt-5 items-center rounded-r-[50%] lg:hover:rounded-r-[0%] ease-in-out duration-200 mr-4 pr-10 ml-4 hover:cursor-pointer">
          </div>
          <div className="flex ml-4 lg:justify-between">
            <h1 className="font-bold text-2xl lg:text-xl lg:font-semibold w-[50%] lg:mt-2">
              Jeanneau Cap Camarat 9.0 CC
            </h1>
            <div className="flex flex-col ml-6 ">
              <div className="text-right">
                <span className="text-sm">From</span>
              </div>
              <div className="font-semibold">
                <p>166.550 E (VAT incl.)</p>
              </div>
            </div>
          </div>
        </div>
        {/* END OF IMAGES */}
      </div>
    </section>
  );
}

export default PopularSection